var app = getApp()
Page({
  data: {
    hasUserInfo: false
  },
  getUserInfo() {
    dd.getAuthCode({
      scopes: 'auth_user',
      fail: (error) => {
        console.error('getAuthCode', error);
      },
      success: () => {
        // do login...
        // then
        dd.getAuthUserInfo({
          fail: (error) => {
            console.error('getAuthUserInfo', error);
          },
          success: (userInfo) => {
            console.log(`userInfo:`, userInfo);
            this.setData({
              userInfo,
              hasUserInfo: true,
            });
          }
        });
      }
    });
  },
  clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }
})
