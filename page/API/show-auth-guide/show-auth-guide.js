Page({
  showAuthGuide() {
    dd.showAuthGuide({ 
        bizType:'AppletPG',
        authType:'LBS',
        success:(res)=>{
            //shown为true时表示会显示权限引导弹窗，为false时表示用户已经授权
            dd.alert({content: '调用成功：'+JSON.stringify(res), });
        },
        fail:(error)=>{
            dd.alert({content: '调用失败：'+JSON.stringify(error), });
        },
    });
  },
});
