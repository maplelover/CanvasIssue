Page({
  data: {
    status: false,
    brightness: 1,
  },
  onLoad() {
    dd.getScreenBrightness({
      success: res => {
        this.setData({
          brightness: res.brightness
        })
      },
    })
  },
  sliderChange(e) {
    dd.setScreenBrightness({
      brightness: e.detail.value,
      success: (res) => {
        this.setData({
          brightness: e.detail.value,
        })
      }
    })
  },
  switchKeepScreenOn(e) {
    dd.setKeepScreenOn({
      keepScreenOn: e.detail.value,
      success: (res) => {
        this.setData({
          status: e.detail.value,
        })
      }
    })
  },
  getBrightness() {
    dd.getScreenBrightness({
      success: res => {
        dd.alert({
          content: `当前屏幕亮度：${res.brightness}`
        });
      }
    })
  }
});