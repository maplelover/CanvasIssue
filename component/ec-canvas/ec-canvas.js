// import * as echarts from "./echarts";
// import * as echarts from "./wx-echarts";
import * as echarts from "echarts"
import MyCanvas from "./my-canvas";

let context

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
    let self = this;
    context = my.createCanvasContext(self.props.canvasId);
    let canvas = new MyCanvas(context, self.props.canvasId);

    echarts.setCanvasCreator(() => {
      return canvas;
    });

    let pixelRatio = my.getSystemInfoSync().pixelRatio || 2;
    let query = my.createSelectorQuery();
    query
      .select(".ec-canvas-" + this.props.canvasId)
      .boundingClientRect()
      .exec(res => {
        let { width, height } = res[0];
        console.log(width, height);
        self.setData({
          width: width * pixelRatio,
          height: height * pixelRatio
        });

        if (typeof callback === 'function') {
          self.chart = callback(canvas, width, height, pixelRatio);
        }
        else if (typeof self.props.onInit === 'function') {
          self.chart = self.props.onInit(canvas, width, height, pixelRatio);
        }
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
  canvasToTempFilePath(opt) {
      if (!opt.canvasId) {
          opt.canvasId = this.props.canvasId;
      }

      context.draw(true, () => {
          _my.canvasToTempFilePath(opt, this);
      });
  },
});
