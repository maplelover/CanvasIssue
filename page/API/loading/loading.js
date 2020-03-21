Page({
  showLoading() {
    dd.showLoading({
      content: '加载中...',
      delay: '1000',
    });
    setTimeout(() => {
      dd.hideLoading();
    }, 5000);
  },
});
