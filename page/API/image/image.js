Page({
  data: {
    filePaths: [],
  },
  chooseImage() {
    dd.chooseImage({
      sourceType: ['camera','album'],
      count: 2,
      success: (res) => {
        dd.alert({
          content: JSON.stringify(res),
        });
        if (res && res.filePaths) {
          this.setData({
            filePaths: res.filePaths,
          });
        }
      },
      fail:()=>{
        dd.showToast({
          content: 'fail', // 文字内容
        });
      }
    })
  },
  previewImage() {
    dd.previewImage({
      current: 2,
      urls: [
        'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg'
      ].concat(this.data.filePaths),
    });
  },
  saveImage() {
    dd.saveImage({
      url: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      showActionSheet: true,
      success: (res) => {
        dd.alert({
          title: `保存成功:${JSON.stringify(res)}`,
        });
      },
      fail:(err)=>{
        dd.alert({
          content: `保存图片失败：${JSON.stringify(err)}`,
        });
      }
    });
  },
});