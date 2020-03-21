import lifecycle from '/util/lifecycle';

Page({
  ...lifecycle,
  data: {
    pageName: 'component/view',
  },
  onLoad() {
    this.setData({
      returnIndex: getCurrentPages().length === 1,
    })
  },
  returnIndex() {
    dd.switchTab({ url: '/page/component/index' });
  },
});
