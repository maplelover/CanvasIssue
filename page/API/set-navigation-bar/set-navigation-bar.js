Page({
  setNaivgationBar(e) {
    var title = e.detail.value.title;
    var backgroundColor = e.detail.value.backgroundColor;
    var borderBottomColor = e.detail.value.borderBottomColor;
    var image = e.detail.value.image;
    console.log(title)
    dd.setNavigationBar({
      title,
      backgroundColor,
      borderBottomColor,
      image,
    })
  },
  resetNavigationBar() {
    dd.setNavigationBar({
      reset: true,
      title: '重置导航栏样式',
    });
  }
})
