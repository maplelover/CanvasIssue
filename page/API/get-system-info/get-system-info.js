Page({
  data: {
    systemInfo: {}
  },
  getSystemInfo() {
    dd.getSystemInfo({
      success: (res) => {
        this.setData({
          systemInfo: res
        })
      }
    })
  },
  getSystemInfoSync() {
    this.setData({
      systemInfo: dd.getSystemInfoSync(),
    });
  },
})
