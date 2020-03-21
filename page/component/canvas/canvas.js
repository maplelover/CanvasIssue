import * as echarts from '/util/ec-canvas/wx-echarts';

/*
{
    "defaultTitle": "Canvas",
    "usingComponents": {
      // "f2": "@antv/my-f2",
      "ec-canvas": "/util/ec-canvas/index"
    }
}

*/

let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    color: ['#37a2da', '#32c5e9', '#67e0e3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    legend: {
      data: ['热度', '正面', '负面']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    series: [
      {
        name: '热度',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [300, 270, 340, 344, 300, 320, 310],
        itemStyle: {
          // emphasis: {
          //   color: '#37a2da'
          // }
        }
      },
      {
        name: '正面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        data: [120, 102, 141, 174, 190, 250, 220],
        itemStyle: {
          // emphasis: {
          //   color: '#32c5e9'
          // }
        }
      },
      {
        name: '负面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        data: [-20, -32, -21, -34, -90, -130, -110],
        itemStyle: {
          // emphasis: {
          //   color: '#67e0e3'
          // }
        }
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },
  onInit: initChart,
  onReady() {
    this.point = {
      x: Math.random() * 590,
      y: Math.random() * 590,
      dx: Math.random() * 10,
      dy: Math.random() * 10,
      r: Math.round(Math.random() * 255 | 0),
      g: Math.round(Math.random() * 255 | 0),
      b: Math.round(Math.random() * 255 | 0),
    };

    this.interval = setInterval(this.draw.bind(this), 17);
    this.ctx = dd.createCanvasContext('canvas');
  },

  draw() {
    const { ctx } = this;
    ctx.setFillStyle('#FFF');
    ctx.fillRect(0, 0, 610, 610);

    ctx.beginPath();
    ctx.arc(this.point.x, this.point.y, 20, 0, 2 * Math.PI);
    ctx.setFillStyle('rgb(' + this.point.r + ', ' + this.point.g + ', ' + this.point.b + ')');
    ctx.fill();
    ctx.draw();

    this.point.x += this.point.dx;
    this.point.y += this.point.dy;
    if (this.point.x <= 10 || this.point.x >= 590) {
      this.point.dx = -this.point.dx;
      this.point.r = Math.round(Math.random() * 255 | 0);
      this.point.g = Math.round(Math.random() * 255 | 0);
      this.point.b = Math.round(Math.random() * 255 | 0);
    }

    if (this.point.y <= 10 || this.point.y >= 590) {
      this.point.dy = -this.point.dy;
      this.point.r = Math.round(Math.random() * 255 | 0);
      this.point.g = Math.round(Math.random() * 255 | 0);
      this.point.b = Math.round(Math.random() * 255 | 0);
    }
  },
  drawBall() {

  },
  log(e) {
    if (e.touches && e.touches[0]) {
      console.log(e.type, e.touches[0].x, e.touches[0].y);
    } else {
      console.log(e.type);
    }
  },
  onUnload() {
    clearInterval(this.interval);
  },
  onInitChart(F2, config) {
    const chart = new F2.Chart(config);
    const data = [
      { value: 63.4, city: 'New York', date: '2011-10-01' },
      { value: 62.7, city: 'Alaska', date: '2011-10-01' },
      { value: 72.2, city: 'Austin', date: '2011-10-01' },
      { value: 58, city: 'New York', date: '2011-10-02' },
      { value: 59.9, city: 'Alaska', date: '2011-10-02' },
      { value: 67.7, city: 'Austin', date: '2011-10-02' },
      { value: 53.3, city: 'New York', date: '2011-10-03' },
      { value: 59.1, city: 'Alaska', date: '2011-10-03' },
      { value: 69.4, city: 'Austin', date: '2011-10-03' },
    ];
    chart.source(data, {
      date: {
        range: [0, 1],
        type: 'timeCat',
        mask: 'MM-DD'
      },
      value: {
        max: 300,
        tickCount: 4
      }
    });
    // chart.area().position('date*value').color('city').adjust('stack');
    // chart.line().position('date*value').color('city').adjust('stack');
    chart.interval().position('date*value').color('city').adjust('stack');

    chart.render();
    // 注意：需要把chart return 出来
    return chart;
  }
});

