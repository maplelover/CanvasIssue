import lifecycle from '/util/lifecycle';
import animModal from '/util/items';

// 修改：将canIUse放在数据内部，提高可读性，并且items中的每一项加上hidden属性
// 如果当前环境有这个API，则正常返回，否则隐藏（items里判断如果hidden代表隐藏）
function canIUse(api) {
  if (dd.canIUse(api.api)) {
    return api;
  } else {
    api.entitle = '当前设备不支持!';
    api.hidden = true;

    return api;
  }
}

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
    pageName: 'API/index',
    hidden: true,
    curIndex: 0,
    ...animModal.data,
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [{
        icon: '/image/api_open.png',
        title: '开放接口',
        entitle: 'Open API',
        subs: [{
          title: '获取授权码',
          entitle: 'getAuthCode',
          page: '../get-auth-code/get-auth-code'
        },
          // {
          //   title: '获取用户信息',
          //   entitle: 'getUserInfo',
          //   page: '../get-user-info/get-user-info'
          // }, {
          //   title: '发起支付',
          //   entitle: 'tradePay',
          //   page: '../request-payment/request-payment'
          // }, {
          //   title: '支付宝卡包',
          //   entitle: 'alipay card pack',
          //   page: '../card-pack/card-pack'
          // }, {
          //   title: '芝麻信用借还',
          //   entitle: 'zmCreditBorrow',
          //   page: '../zm-credit-borrow/zm-credit-borrow'
          // }, // {
          //   title: '支付宝代扣',
          //   entitle: 'paySignCenter',
          //   page: '../pay-sign-center/pay-sign-center'
          // },
          // canIUse({
          //   api: 'textRiskIdentification',
          //   title: '文本风险识别',
          //   entitle: 'textRiskIdentification',
          //   page: '../text-risk-identification/text-risk-identification',
          // }),
        ],
      }, {
        icon: '/image/api_view.png',
        title: '界面',
        entitle: 'Interface',
        subs: [{
          title: '警告框',
          entitle: 'alert',
          page: '../alert/alert'
        }, {
          title: '确认框',
          entitle: 'confirm',
          page: '../confirm/confirm'
        }, {
          title: '弱提示',
          entitle: 'toast',
          page: '../toast/toast'
        }, {
          title: '加载提示',
          entitle: 'loading',
          page: '../loading/loading'
        }, {
          title: '操作菜单',
          entitle: 'showActionSheet',
          page: '../action-sheet/action-sheet'
        }, {
          title: '设置界面导航栏',
          entitle: 'setNavigationBar',
          page: '../set-navigation-bar/set-navigation-bar'
        },
        // {
        //   title: '设置 optionMenu',
        //   entitle: 'setOptionMenu',
        //   page: '../option-menu/option-menu'
        // },
        // {
        //   title: '标题栏加载动画',
        //   entitle: 'navigationBarLoading',
        //   page: '../navigation-bar-loading/navigation-bar-loading'
        // }, 
        {
          title: '页面跳转',
          // 180413去除redirectTo提升（因为目前不存在））
          entitle: 'navigateTo, navigateBack, switchTab, reLaunch',
          page: '../navigator/navigator'
        },
        // {
        //   title: '下拉刷新',
        //   entitle: 'pullDownRefresh',
        //   page: '../pull-down-refresh/pull-down-refresh'
        // },
        {
          title: '创建动画',
          entitle: 'createAnimation',
          page: '../animation/animation'
        }, {
          title: '创建绘画',
          entitle: 'createCanvasContext',
          page: '../canvas/canvas'
        },
        //  {
        //   title: '联系人',
        //   entitle: 'choosePhoneContact, chooseAlipayContact',
        //   page: '../contact/contact'
        // }, {
        //   title: '选择城市',
        //   entitle: 'chooseCity',
        //   page: '../choose-city/choose-city'
        // }, 
        {
          title: '选择日期',
          entitle: 'datePicker',
          page: '../date-picker/date-picker'
        },
        {
          title: '滚动页面',
          entitle: 'pageScrollTo',
          page: '../page-scroll-to/page-scroll-to'
        },
        {
          title: '节点位置',
          entitle: 'createSelectorQuery',
          page: '../create-selector-query/create-selector-query'
        },
        {
          title: '隐藏键盘',
          entitle: 'hideKeyboard',
          page: '../keyboard/keyboard'
        },
          // canIUse({
          //   api: 'multiLevelSelect',
          //   title: '多级联选择器',
          //   entitle: 'multiLevelSelect',
          //   page: '../multi-level-select/multi-level-select'
          // }),
        ]
      },
      {
        icon: '/image/api_device.png',
        title: '设备',
        entitle: 'Device',
        subs: [
          canIUse({
            api: 'getNetworkType',
            title: '获取手机网络状态',
            entitle: 'getNetworkType',
            page: '../get-network-type/get-network-type'
          }),
          {
            title: '获取手机系统信息',
            entitle: 'getSystemInfo',
            page: '../get-system-info/get-system-info'
          },
          // {
          //   title: '获取服务器时间',
          //   entitle: 'getServerTime',
          //   page: '../get-server-time/get-server-time'
          // },
          // {
          //   title: '摇一摇',
          //   entitle: 'watchShake',
          //   page: '../watch-shake/watch-shake'
          // },
          {
            title: '震动',
            entitle: 'vibrate',
            page: '../vibrate/vibrate'
          },
          // {
          //   title: '打电话',
          //   entitle: 'makePhoneCall',
          //   page: '../make-phone-call/make-phone-call'
          // },
          {
            title: '剪贴板',
            entitle: 'clipboard',
            page: '../clipboard/clipboard'
          },
          // {
          //   title: '获取基础版本库',
          //   entitle: 'SDKVersion',
          //   page: '../sdk-version/sdk-version'
          // },
          // {
          //   title: '用户截屏事件',
          //   entitle: 'UserCaptureScreen',
          //   page: '../user-capture-screen/user-capture-screen'
          // },
          // canIUse({
          //   api: 'showAuthGuide',
          //   title: '权限引导',
          //   entitle: 'showAuthGuide',
          //   page: '../show-auth-guide/show-auth-guide'
          // }),
          // canIUse({
          //   api: 'setKeepScreenOn',
          //   title: '屏幕亮度',
          //   entitle: 'setKeepScreenOn',
          //   page: '../screen/screen',
          // }),
        ]
      },
      {
        icon: '/image/api_network.png',
        title: '网络',
        entitle: 'Network',
        subs: [canIUse({
          api: 'httpRequest',
          title: '发起一个请求',
          entitle: 'request',
          page: '../request/request'
        }),
        // {
        // title: 'WebSocket',
        // entitle: 'WebSocket',
        // page: '../web-socket/web-socket'
        // }, 
        canIUse({
          api: 'uploadFile',
          title: '上传文件',
          entitle: 'Upload File',
          page: '../upload-file/upload-file'
        }), {
          title: '下载文件',
          entitle: 'Download File',
          page: '../download-file/download-file'
        }]
      },
      // {
      //   icon: '/image/api_websocket.png',
      //   title: 'Websocket',
      //   entitle: 'Websocket',
      //   page: '../websocket/websocket'
      // },
      {
        icon: '/image/api_media.png',
        title: '媒体',
        entitle: 'Media',
        subs: [{
          title: '图片',
          entitle: 'chooseImage/previewImage/saveImage',
          page: '../image/image'
        },
        canIUse({
          api: 'getImageInfo',
          title: '获取图片信息',
          entitle: 'getImageInfo',
          page: '../get-image-info/get-image-info'
        }),
        canIUse({
          api: 'compressImage',
          title: '压缩图片',
          entitle: 'compressImage',
          page: '../compress-image/compress-image'
        }),
        ]
      },
      // {
      //   icon: '/image/api_map.png',
      //   title: '位置',
      //   entitle: 'Location',
      //   subs: [{
      //     title: '获取当前位置',
      //     entitle: 'getLocation',
      //     page: '../get-location/get-location'
      //   }, {
      //     title: '使用原生地图查看位置',
      //     entitle: 'openLocation',
      //     page: '../open-location/open-location'
      //   }, {
      //     title: '打开地图选择位置',
      //     entitle: 'chooseLocation',
      //     page: '../choose-location/choose-location'
      //   }]
      // }, 
      {
        icon: '/image/api_data.png',
        title: '缓存',
        entitle: 'Storage',
        page: '../storage/storage'
      },
      //  {
      //   icon: '/image/api_scan.png',
      //   title: '扫码 Scan',
      //   entitle: '',
      //   page: '../scan-code/scan-code'
      // },
      {
        icon: '/image/api_share.png',
        title: '自定义分享',
        entitle: 'Share',
        page: '../share/share'
      }
        // , {
        //   icon: '/image/api_rsa.png',
        //   title: '非对称加密',
        //   entitle: 'RSA',
        //   page: '../rsa/rsa',
        // },
        // {
        //   icon: '/image/api_bluetooth.png',
        //   title: '蓝牙',
        //   entitle: 'Bluetooth',
        //   page: '../bluetooth/bluetooth'
        // },
        // {
        //   icon: '/image/api_analysis.png',
        //   title: '自定义分析',
        //   entitle: 'Report-Analytics',
        //   page: '../report-analytics/report-analytics'
        // },
        // {
        //   icon: '/image/api_file.png',
        //   title: '文件',
        //   entitle: 'File',
        //   page: '../file/file',
        // },
      ],
    }
  },
  onGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index;
    const childList = this.data.arr.list[curIndex];
    if (childList.subs) {
      this.setData({
        hidden: !this.data.hidden,
        curIndex,
      });
      this.createMaskShowAnim();
      this.createContentShowAnim();
    } else {
      const e = {
        currentTarget: {
          dataset: { page: childList.page }
        }
      };
      this.onChildItemTap(e);
    }
  },
  onChildItemTap(e) {
    const { page } = e.currentTarget.dataset;
    dd.navigateTo({ url: page });
  },
  onModalCloseTap() {
    this.createMaskHideAnim();
    this.createContentHideAnim();
    setTimeout(() => {
      this.setData({
        hidden: true,
      });
    }, 210);
  },
});
