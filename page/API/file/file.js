Page({
  data: {
    tempFilePath: '',
    savedFilePath: '',
  },
  onLoad() {
    dd.getStorage({
      key: 'savedFilePath', // 缓存数据的 key
      success: (res) => {
        this.setData({
          savedFilePath: res.data ? res.data : '',
        });
      },
    });
  },
  chooseImage() {
    dd.chooseImage({
      count: 1,
      success: (res) => {
        console.log('chooseImage', res);
        this.setData({
          tempFilePath: res.filePaths[0],
        });
      },
    });
  },
  saveFile() {
    if (this.data.tempFilePath.length > 0) {
      const that = this;
      dd.saveFile({
        filePath: this.data.tempFilePath,
        success(res) {
          console.log('saveFile', res);
          that.setData({
            savedFilePath: res.savedFilePath,
          });
          dd.setStorage({ key: 'savedFilePath', data: res.filePath });
          dd.alert({
            title: '保存成功', // alert 框的标题
            content: '下次进入应用时，此文件仍可用',
          });
        },
      });
    }
  },
  clear() {
    dd.setStorage({ key: 'savedFilePath', data: '' })
    this.setData({
      tempFilePath: '',
      savedFilePath: '',
    });
  },
});
