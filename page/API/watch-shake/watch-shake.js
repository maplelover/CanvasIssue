Page({
  watchShake() {
    dd.watchShake({
      success: function() {
        console.log('动起来了')
        dd.alert({ title:'动起来了 o.o'});
      }
    });
  },
});
