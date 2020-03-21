Page({
  onLoad() {},
  data: {},
  getAuthCode: () => {
    dd.getAuthCode({
      scopes: 'auth_user',
      success: ({ authCode }) => {
        dd.alert({
          content: authCode,
        });
      },
    });
  },
});
