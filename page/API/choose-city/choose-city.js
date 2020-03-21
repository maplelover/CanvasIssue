Page({
  chooseCity() {
    dd.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        dd.alert({
          title: 'chooseAlipayContact response: ' + JSON.stringify(res),
        });
      },
    });
  },
});
