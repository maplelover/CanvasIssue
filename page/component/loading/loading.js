Page({
  loadingTap() {
    dd.showLoading({
      content: '你好啊...',
      delay: 1000,
    });

    setTimeout(() => {
      dd.hideLoading();
    }, 3000);
  },
});
