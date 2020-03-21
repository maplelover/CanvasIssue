Page({
  data: {
    hasNetworkType: false
  },
  onLoad() {
    this.onChange = this.onChange.bind(this);
    // dd.onNetworkChange(this.onChange);
  },
  onChange(res){
    console.log('onNetworkChange', res);
    this.setData({
      hasNetworkType: true,
      networkType: res.networkType
    });
  },
  onUnload() {
    // dd.offNetworkChange(this.onChange);
  },
  getNetworkType() {
    dd.getNetworkType({
      success: (res) => {
        this.setData({
          hasNetworkType: true,
          networkType: res.networkType
        })
      }
    })
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  },
});
