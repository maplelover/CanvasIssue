import * as echarts from "echarts"
import geoJson from './china.js';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);
  echarts.registerMap('china', geoJson);

  const options = {
    title: {
      text: '全国资产分布',
      subtext: '越秀地产',
      sublink: 'http://www.pm25.in',
      x:'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    visualMap: {
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true
    },
    series: [{
      name:'地图',
      type: 'map',
      mapType: 'china',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          textStyle: {
            color: '#f00'
          }
        }
      },
      itemStyle: {

        normal: {
          borderColor: '#389BB7',
          areaColor: '#fff',
        },
        emphasis: {
          areaColor: '#fff',
          borderWidth: 3
        }
      },
      animation: true,

      data: [
         {name: '北京',value: Math.round(Math.random()*500)},
                            {name: '天津',value: Math.round(Math.random()*500)},
                            {name: '上海',value: Math.round(Math.random()*500)},
                            {name: '重庆',value: Math.round(Math.random()*500)},
                            {name: '河北',value: Math.round(Math.random()*500)},
                            {name: '河南',value: Math.round(Math.random()*500)},
                            {name: '云南',value: Math.round(Math.random()*500)},
                            {name: '辽宁',value: Math.round(Math.random()*500)},
                            {name: '黑龙江',value: Math.round(Math.random()*500)},
                            {name: '湖南',value: Math.round(Math.random()*500)},
                            {name: '安徽',value: Math.round(Math.random()*500)},
                            {name: '山东',value: Math.round(Math.random()*500)},
                            {name: '新疆',value: Math.round(Math.random()*500)},
                            {name: '江苏',value: Math.round(Math.random()*500)},
                            {name: '浙江',value: Math.round(Math.random()*500)},
                            {name: '江西',value: Math.round(Math.random()*500)},
                            {name: '湖北',value: Math.round(Math.random()*500)},
                            {name: '广西',value: Math.round(Math.random()*500)},
                            {name: '甘肃',value: Math.round(Math.random()*500)},
                            {name: '山西',value: Math.round(Math.random()*500)},
                            {name: '内蒙古',value: Math.round(Math.random()*500)},
                            {name: '陕西',value: Math.round(Math.random()*500)},
                            {name: '吉林',value: Math.round(Math.random()*500)},
                            {name: '福建',value: Math.round(Math.random()*500)},
                            {name: '贵州',value: Math.round(Math.random()*500)},
                            {name: '广东',value: Math.round(Math.random()*500)},
                            {name: '青海',value: Math.round(Math.random()*500)},
                            {name: '西藏',value: Math.round(Math.random()*500)},
                            {name: '四川',value: Math.round(Math.random()*500)},
                            {name: '宁夏',value: Math.round(Math.random()*500)},
                            {name: '海南',value: Math.round(Math.random()*500)},
                            {name: '台湾',value: Math.round(Math.random()*500)},
                            {name: '香港',value: Math.round(Math.random()*500)},
                            {name: '澳门',value: Math.round(Math.random()*500)},
                            {name: '南海诸岛',value: Math.round(Math.random()*500)}
      ]
    }]
  };

  chart.setOption(options);
  return chart;
}

Page({
  data: {
  },
  onInit: initChart,
  onReady() {
  }
});
