import formatLocation from './format-location.js';

Page({
  data: {
    hasLocation: false,
  },
  getLocation() {
    var that = this;
    dd.showLoading();
    dd.getLocation({
      success(res) {
        dd.hideLoading();
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
      },
      fail() {
        dd.hideLoading();
        dd.alert({ title: '定位失败' });
      },
    })
  },
  clear() {
    this.setData({
      hasLocation: false
    })
  }
})
