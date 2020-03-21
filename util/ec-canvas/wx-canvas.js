function strLen(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
}

export default class WxCanvas {
    constructor(ctx, canvasId) {
        this.ctx = ctx;
        this.canvasId = canvasId;
        this.chart = null;

        this._initCanvas(ctx);
        this._initStyle(ctx);
        this._initEvent();
    }

    getContext(contextType) {
        if (contextType === "2d") {
            return this.ctx;
        }
    } 

    setChart(chart) {
        this.chart = chart;
    }

    attachEvent() {
      console.log(arguments);
        // noop
    }

    detachEvent() {
      console.log(arguments);
        // noop
    }

    _initCanvas(ctx) {
      // 钉钉钉钉小程序框架不支持 measureText 方法，用此方法 mock
      if (!ctx.measureText) {
        ctx.measureText = (text) => {
          let fontSize = 12;
          const font = ctx.__font;
          if (font) {
            fontSize = parseInt(font.split(' ')[3], 10);
          }
          fontSize /= 2;
          return {
            width: strLen(text) * fontSize
          };
        }
      }

      if (!ctx.transform) {
        ctx.transform = () => {
          console.log(arguments);
        }
      }

      if (!ctx.setLineDash) {
        ctx.setLineDash = () => {
          console.log(arguments);
        }
      }
    }

    _initStyle(ctx) {
        var styles = [
            "fillStyle",
            "strokeStyle",
            "globalAlpha",
            "textAlign",
            "textBaseAlign",
            "shadow",
            "lineWidth",
            "lineCap",
            "lineJoin",
            "lineDash",
            "miterLimit",
            "fontSize"
        ];
        styles.forEach(style => {
            Object.defineProperty(ctx, style, {
                set: value => {
                    if (
                        (style !== "fillStyle" && style !== "strokeStyle") ||
                        (value !== "none" && value !== null)
                    ) {
                        ctx[
                            "set" +
                                style.charAt(0).toUpperCase() +
                                style.slice(1)
                        ](value);
                    }
                }
            });
        });

        ctx.createRadialGradient = (...p) => {
            return ctx.createCircularGradient(...p);
        };
    }

    _initEvent() {
        this.event = {};
        const eventNames = [
            {
                wxName: "touchStart",
                ecName: "mousedown"
            },
            {
                wxName: "touchMove",
                ecName: "mousemove"
            },
            {
                wxName: "touchEnd",
                ecName: "mouseup"
            },
            {
                wxName: "touchEnd",
                ecName: "click"
            }
        ];
        eventNames.forEach(name => {
          console.log(name)
          console.log(this.event)
            this.event[name.wxName] = e => {
                const touch = e.touches[0];
                this.chart.getZr().handler.dispatch(name.ecName, {
                    zrX: name.wxName === "tap" ? touch.clientX : touch.x,
                    zrY: name.wxName === "tap" ? touch.clientY : touch.y
                });
            };
        });
    }
}
