Page({
  data: {
    text: '3.1415926',
    copy: '',
  },

  handleInput(e) {
    this.setData({
      text: e.detail.value,
    });
  },

  handleCopy() {
    dd.setClipboard({
      text: this.data.text,
    });
  },

  handlePaste() {
    dd.getClipboard({
      success: ({ text }) => {
        this.setData({ copy: text });
      },
    });
  },
});
