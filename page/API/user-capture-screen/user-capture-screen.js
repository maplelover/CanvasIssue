Page({
  data: {
    condition: false,
  },
  onReady() {
    dd.onUserCaptureScreen(() => {
      dd.alert({
        content: '收到用户截图',
      });
    });
  },
  offUserCaptureScreen() {
    dd.offUserCaptureScreen();
    this.setData({
      condition: false,
    });
  },
  onUserCaptureScreen() {
    dd.onUserCaptureScreen(() => {
      dd.alert({
        content: '收到用户截图'
      });
    });
    this.setData({
      condition: true,
    });
  },
});
