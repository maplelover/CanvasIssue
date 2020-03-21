Page({
  actionSheetTap() {
    const items = ['A', 'B', 'C'];
    dd.showActionSheet({
      title: '选择',
      cancelButtonText: 'Cancel',
      items,
      success({ index }) {
        if (index > -1) {
          dd.alert({ title: `你选中了 ${items[index]}` });
        } else {
          dd.alert({ title: '你取消了' });
        }
      },
    });
  },
});
