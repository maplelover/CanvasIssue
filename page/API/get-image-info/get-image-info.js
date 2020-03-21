Page({
  data: {
    src: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
  },
  getImageInfo() {
    dd.getImageInfo({
      src: this.data.src,
      success: (res) => {
        dd.alert({
          content: JSON.stringify(res),
        });
      }
    })
  }
});