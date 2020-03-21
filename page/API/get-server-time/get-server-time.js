Page({

  getServerTime(){
    dd.getServerTime({
      success: (res) => {
        dd.alert({
          content: res.time,
        });
      },
    });
  }
})
