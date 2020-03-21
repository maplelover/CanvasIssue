Page({
  data: {
    height: 20,
    focus: false,
  },
  bindButtonTap() {
    this.onFocus();
  },
  onFocus() {
    this.setData({
      focus: true,
    });
  },
  onBlur() {
    this.setData({
      focus: false,
    });
  },

  bindTextAreaBlur(e) {
    console.log(e.detail.value);
  },
  bindFormSubmit(e) {
    dd.alert({
      content: e.detail.value.textarea,
    });
  },
});
