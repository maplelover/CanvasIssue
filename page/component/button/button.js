Page({
  data: {},
  onShareAppMessage() {
    return {
      title: 'view page',
      path: 'page/component/view/view',
    };
  },
  onSubmit() {
    dd.alert({ title: 'You click submit' });
  },
  onReset() {
    dd.alert({ title: 'You click reset' });
  },
});

