Page({
  showToast() {
    dd.showToast({
      content: '成功',
      type: 'success',
      duration: 3000,
      success() {
        console.log('toast end');
      },
    });
  },
  hideToast() {
    dd.hideToast({
      success() {
        console.log('toast hide');
      },
    });
  },
});
