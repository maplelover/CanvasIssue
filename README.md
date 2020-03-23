## 使用说明
本程序演示在支付宝以及钉钉小程序中使用 ECharts

## 注意事项
如果重新下载 echarts 或者 zrender 依赖库，需要修改以下代码以支持支付宝/钉钉小程序使用

文件路径:
node_modules/zrender/lib/core/env.js

将 wx 改为 my:
- if (typeof wx === 'object' && typeof wx.getSystemInfoSync === 'function') {
+ if (typeof my === 'object' && typeof my.getSystemInfoSync === 'function') {