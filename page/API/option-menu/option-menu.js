Page({
  onOptionMenuClick(e) {
    dd.alert({
      content: `click option menu with index: ${JSON.stringify(e.data.index)}`,
    });
  },
});
