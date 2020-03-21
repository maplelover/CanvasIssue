Page({
  data: {
    scrollTop: 0,
  },
  scrollTopChange(e) {
    this.setData({
      scrollTop: e.detail.value,
    });
  },
  onPageScroll({ scrollTop }) {
    console.log('onPageScroll', scrollTop);
  },
  scrollTo() {
    console.log('begin scroll');
    dd.pageScrollTo({
      scrollTop: parseInt(this.data.scrollTop),
    });
  },
});
