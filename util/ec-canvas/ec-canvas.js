// import * as echarts from "./echarts";
import * as echarts from "./wx-echarts";
// import mycontext from './my-context';
import WxCanvas from "./wx-canvas";

function wrapTouch(event) {
  for (let i = 0; i < event.touches.length; ++i) {
    const touch = event.touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }
  return event;
}

Component({
  mixins: [],
  data: {
  },
  props: {
    canvasId: {
      type: String,
      value: 'ec-canvas'
    },

    ec: {
      type: Object
    },

    onInit: () => {}
  },
  didMount() {
    const id = `ec-canvas-${this.$id}`;
    const context = my.createCanvasContext(id);
    // const myCtx = my.createCanvasContext(id);
    // const context = mycontext(myCtx);

    const canvas = new WxCanvas(context, id);

    echarts.setCanvasCreator(() => {
      return canvas;
    });

    let self = this;
    const query = my.createSelectorQuery();
    query
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        console.log(res);
        // 获取画布实际宽高
        const { width, height } = res[0];
        const canvasDpr = my.getSystemInfoSync().pixelRatio;
        // 高清解决方案
        self.setData({
          id,
          width: width * canvasDpr,
          height: height * canvasDpr
        });

        if (typeof callback === 'function') {
          self.chart = callback(canvas, res.width, res.height, canvasDpr);
        }
        else if (typeof self.props.onInit === 'function') {
          self.chart = self.props.onInit(canvas, res.width, res.height, canvasDpr);
        }
        else if (self.props.ec && typeof self.props.ec.onInit === 'function') {
          self.chart = self.props.ec.onInit(canvas, res.width, res.height, canvasDpr);
        }
        else {
          self.triggerEvent('init', {
            canvas: canvas,
            width: res.width,
            height: res.height,
            canvasDpr: canvasDpr // 增加了dpr，可方便外面echarts.init
          });
        }
        
        // const chart = this.props.onInit(F2, { context, width, height, pixelRatio });
        // if (chart) {
        //   this.chart = chart;
        //   this.canvasEl = chart.get('el');
        // }
      });
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    touchStart(e) {
      if (this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.chart.getZr().handler;
        handler.dispatch('mousedown', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'start');
      }
    },

    touchMove(e) {
      if (this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.chart.getZr().handler;
        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'change');
      }
    },

    touchEnd(e) {
      if (this.chart) {
        const touch = e.changedTouches ? e.changedTouches[0] : {};
        var handler = this.chart.getZr().handler;
        handler.dispatch('mouseup', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch('click', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'end');
      }
    }
  },
});
