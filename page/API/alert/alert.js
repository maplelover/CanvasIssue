Page({
  alert() {
    dd.alert({
      title: '亲',
      content: '您本月的账单已出',
      buttonText: '我知道了',
      success: () => {
        dd.alert({
          title: '用户点击了「我知道了」',
        });
      }
    });
  },
})
