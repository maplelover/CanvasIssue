import example from './example.js';

Page({
  onLoad() {
    this.context = dd.createCanvasContext('canvas')

    var methods = Object.keys(example)
    this.setData({
      methods: methods
    })

    var that = this
    methods.forEach(function (method) {
      that[method] = function () {
        example[method](that.context)
        that.context.draw();
      }
    })
  },
  log(e) {
    console.log('canvas', e);
  },
  toTempFilePath() {
    this.context.toTempFilePath({
      success(res) {
        dd.previewImage({
          urls: [res.filePath],
        });
      },
      fail(res) {
        dd.alert({
          title: 'toTempFilePath',
          content: `error: ${res.error}`,
        })
      }
    })
  }
})
