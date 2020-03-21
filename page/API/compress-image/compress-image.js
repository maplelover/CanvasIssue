Page({
  data: {
    // https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg
    src: '',
    compressedSrc: '',
  },
  chooseImage() {
    dd.chooseImage({
      sourceType: ['camera', 'album'],
      count: 1,
      success: (res) => {
        // dd.showToast({
        //   duration: 1000,
        //   content: JSON.stringify(res),
        // });
        if (res && res.filePaths) {
          this.setData({
            src: res.filePaths[0],
          });
        }
      },
      fail: () => {
        dd.showToast({
          duration: 1000,
          content: 'fail', // 文字内容
        });
      }
    })
  },
  compressImage() {
    if (!this.data.src) {
      dd.alert({
        title: '请先选择原图',
      });

      return;
    }
    dd.compressImage({
      filePaths: [this.data.src],
      level: 0,
      success: res => {
        // dd.showToast({
        //   duration: 1000,
        //   content: JSON.stringify(res),
        // });
        this.setData({
          compressedSrc: res.filePaths[0],
        })
      },
      fail: err => {
        dd.showToast({
          duration: 1000,
          content: JSON.stringify(err),
        });
      },
    })
  }
});