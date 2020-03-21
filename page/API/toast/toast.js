Page({
  showToastSuccess() {
    dd.showToast({
      type: 'success',
      content: '操作成功',
      duration: 3000,
      success: () => {
        dd.alert({
          title: 'toast 消失了',
        });
      },
    });
  },
  showToastFail() {
    dd.showToast({
      type: 'fail',
      content: '操作失败',
      duration: 3000,
      success: () => {
        dd.alert({
          title: 'toast 消失了',
        });
      },
    });
  },
  showToastException() {
    dd.showToast({
      type: 'exception',
      content: '网络异常',
      duration: 3000,
      success: () => {
        dd.alert({
          title: 'toast 消失了',
        });
      },
    });
  },
  showToastNone() {
    dd.showToast({
      type: 'none',
      content: '提醒',
      duration: 3000,
      success: () => {
        dd.alert({
          title: 'toast 消失了',
        });
      },
    });
  },
  hideToast() {
    dd.hideToast()
  },
})
