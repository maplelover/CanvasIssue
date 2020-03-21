Page({
  choosePhoneContact() {
    dd.choosePhoneContact({
      success: (res) => {
        dd.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        dd.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
    });
  },
  chooseAlipayContact() {
    dd.chooseAlipayContact({
      count: 2,
      success: (res) => {
        dd.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        dd.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
    });
  },
  chooseContact() {
    dd.chooseContact({
      chooseType: 'multi', // 多选模式
      includeMe: true,     // 包含自己
      includeMobileContactMode: 'known',//仅包含双向手机通讯录联系人，也即双方手机通讯录都存有对方号码的联系人
      multiChooseMax: 3,  // 最多能选择三个联系人
      multiChooseMaxTips: '超过选择的最大人数了',
      success: (res) => {
        dd.alert({
          content: 'chooseContact : ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        dd.alert({
          content: 'chooseContact : ' + JSON.stringify(res)
        });
      },
    });
  },
});
