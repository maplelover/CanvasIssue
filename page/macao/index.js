import * as echarts from "echarts"
import geoJson from './macao.js';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);

  echarts.registerMap('macao', geoJson);

  const options = {
    visualMap: {
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    series: [{
      name:'澳门',
      type: 'map',
      mapType: 'macao',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true,
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
        }
      },
      animation: true,

      data: [
        {name: '花地玛堂区',value: Math.round(Math.random()*500)},
        {name: '大堂区',value: Math.round(Math.random()*500)},
        {name: '花王堂区',value: Math.round(Math.random()*500)},
        {name: '望德堂区',value: Math.round(Math.random()*500)},
        {name: '风顺堂区',value: Math.round(Math.random()*500)},
        {name: '嘉模堂区',value: Math.round(Math.random()*500)},
        {name: '路凼填海区',value: Math.round(Math.random()*500)},
        {name: '圣方济各堂区',value: Math.round(Math.random()*500)},
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
