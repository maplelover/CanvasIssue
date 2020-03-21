Page({
  data: {
    value: '',
  },
  handleInput(event) {
    this.setData({
      value: event.detail.value,
    });
  },
  textRiskIdentification() {
    dd.textRiskIdentification({
      content: this.data.value,
      type: ['keyword', '0', '1', '2', '3'],
      success: (res) => {
        dd.alert({
          title: this.data.value,
          content: JSON.stringify(res),
        });
      },
    });
  },
});
