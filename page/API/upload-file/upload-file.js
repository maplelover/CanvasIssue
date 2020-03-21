Page({
  uploadFile() {
    dd.chooseImage({
      sourceType: ['camera', 'album'],
      count: 1,
      success: res => {
        const path = (res.filePaths && res.filePaths[0]) || (res.apFilePaths && res.apFilePaths[0]);

        dd.alert({ content: `内容：${path}` });
        dd.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: res => {
            dd.alert({ title: `上传成功：${JSON.stringify(res)}` });
          },
          fail: function (res) {
            dd.alert({ title: `上传失败：${JSON.stringify(res)}` });
          },
        });
      },
    });
  },
});
