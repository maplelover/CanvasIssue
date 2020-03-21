Page({
  showActionSheet() {
    dd.showActionSheet({
      title: '钉钉-ActionSheet',
      items: ['菜单一', '菜单二', '菜单三'],
      cancelButtonText: '取消好了',
      success: (res) => {
        const btn = res.index === -1 ? '取消' : '第' + res.index + '个';
        dd.alert({
          title: `你点了${btn}按钮`
        });
      },
    });
  },
});
