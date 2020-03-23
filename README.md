## 使用说明
本程序演示在支付宝以及钉钉小程序中使用 ECharts

测试结果：
支付宝模拟器、真机均完美展现；
钉钉模拟器缺失小部分元素，真机缺少大部分元素；
具体可以下载支付宝小程序开发者工具运行代码查看，或者可以看/screenshot里的截图

![支付宝模拟器](/screenshot/模拟器/支付宝1.png)
![支付宝模拟器](/screenshot/模拟器/支付宝2.png)
![支付宝真机](/screenshot/真机/支付宝1.png)
![支付宝真机](/screenshot/真机/支付宝1.png)

![钉钉模拟器](/screenshot/模拟器/钉钉1.png)
![钉钉模拟器](/screenshot/模拟器/钉钉2.png)
![钉钉真机](/screenshot/真机/钉钉1.png)
![钉钉真机](/screenshot/真机/钉钉1.png)

## 注意事项
如果重新下载 echarts 或者 zrender 依赖库，需要修改以下代码以支持支付宝/钉钉小程序使用

文件路径:
node_modules/zrender/lib/core/env.js

将 wx 改为 my:
- if (typeof wx === 'object' && typeof wx.getSystemInfoSync === 'function') {
+ if (typeof my === 'object' && typeof my.getSystemInfoSync === 'function') {