Page({
  download() {
    dd.downloadFile({
      url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
      success({ filePath }) {
        dd.previewImage({
          urls: [filePath],
        });
      },
      fail(res) {
        dd.alert({
          content: res.errorMessage || res.error,
        });
      },
    });
  },
})
