Page({
  vibrate() {
    dd.vibrate({
      success: () => {
        dd.alert({ title: '震动起来了'});
      }
    });
  },
})
