
Page({
  data: {},
  onSubmit(e) {
    dd.alert({
      content: `数据：${JSON.stringify(e.detail.value)}`,
    });
  },
  onReset() {
    
  },
});
