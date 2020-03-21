Page({
  onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date());
  },
  stopPullDownRefresh() {
    dd.stopPullDownRefresh({
      complete(res) {
        console.log(res, new Date())
      }
    })
  }
});
