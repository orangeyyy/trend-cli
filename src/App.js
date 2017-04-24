import React, { Component } from 'react';
import Echart from 'echarts';
import logo from './logo.svg';
import './App.css';
import * as data from './trend';
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let chart1 = Echart.init(this.echart1);

    let option1 = {
      title: {
        text: '竞价趋势'
      },
      tooltip: {},
      legend: {
        data:['第一次报价', '第二次报价', '最低报价', '平均报价', '第一次', '第二次']
      },
      xAxis: {
        data: data.date
      },
      yAxis: {
        boundaryGap: false
      },
      series: [{
        name: '第一次报价',
        type: 'bar',
        data: data.firstPrice
      }, {
        name: '第二次报价',
        type: 'bar',
        data: data.secondPrice
      }, {
        name: '最低报价',
        type: 'bar',
        data: data.lowestPrice
      }, {
        name: '平均报价',
        type: 'bar',
        data: data.averatPrice
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    chart1.setOption(option1);

    let chart2 = Echart.init(this.echart2);

    let option2 = {
      title: {
        text: '比例趋势'
      },
      tooltip: {},
      legend: {
        data:['第一次', '第二次']
      },
      xAxis: {
        data: data.date
      },
      yAxis: {
        boundaryGap: false
      },
      series: [{
        name: '第一次报价比例',
        type: 'bar',
        data: data.firstPrice.map((price, index) => data.lowestPrice[index]/price)
      }, {
        name: '第二次报价比例',
        type: 'bar',
        data: data.secondPrice.map((price, index) => data.lowestPrice[index]/price)
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    chart2.setOption(option2);

  }
  render() {
    return (
      <div className="App">
        <div className="content1"
          style={{
            width: 1600,
            height: 600
          }}
          ref={(echart) => this.echart1 = echart}></div>
        <div className="content2"
          style={{
            width: 1600,
            height: 600
          }}
          ref={(echart) => this.echart2 = echart}></div>
      </div>
    );
  }
}

export default App;
