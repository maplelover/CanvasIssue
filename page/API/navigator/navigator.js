Page({
  navigateTo() {
    dd.navigateTo({ url: '../get-auth-code/get-auth-code' })
  },
  navigateBack() {
    dd.navigateBack()
  },
  redirectTo() {
    dd.redirectTo({ url: '../get-auth-code/get-auth-code' })
  },
  switchTab() {
    dd.switchTab({
        url: '/page/component/index',
        success: () => {
          dd.showToast({
            content: '成功',
            type: 'success',
            duration: 4000
          });
        }
      }
    );
  },
  reLaunch() {
    dd.reLaunch({
      url: '/page/component/index',
    });
  }
})
