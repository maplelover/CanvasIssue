Page({
  requestHttp() {
    dd.httpRequest({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        from: '钉钉',
        production: 'Dingtalk',
      },
      dataType: 'json',
      success: function(res) {
        dd.alert({content: JSON.stringify(res)});
      },
      fail: function(res) {
        dd.alert({content: JSON.stringify(res)});
      },
      complete: function(res) {
        dd.alert({title: 'complete'});
      }
    });
  }
})
