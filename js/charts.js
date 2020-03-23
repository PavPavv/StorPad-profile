'use strict';
//Donut chart
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  let data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Возврат',     6],
    ['Ожидает оплаты',      2],
    ['В пути к клиенту',    2]
  ]);

  let options = {
    title: '',
    pieHole: 0.75,
    pieSliceTextStyle: {
      color: 'transparent',
    },
    colors: ['#FDD46C', '#CE4977', '#46C1C4'],
    fontSize: 10,
    fontName: 'Gilroy_Medium',
    chartArea: {
      width: '100%',
      height: '300px',
      top: '14%',
      left: '10%'
    }
  };
  
  let chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

//Stacked bar chart
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
  let data = google.visualization.arrayToDataTable([
    ['Orders', 'Возврат', 'В пути к клиенту', 'Ожидает оплаты'],
    ['SP43001-08', 40000, 180000, 0],
    ['SP43002-08', 25000, 95000, 147000],
    ['SP43003-08', 25000, 95000, 260000],
    ['SP43004-08', 25000, 180000, 200000],
    ['SP43005-08', 30000, 140000, 170000],
    ['SP43006-08', 30000, 110000, 140000]
  ]);

  let options = {
    title: '',
    chartArea: {
      width: '65%'
    },
    isStacked: true,
    hAxis: {
      title: '',
      minValue: 0,
      maxValue: 300000
    },
    vAxis: {
      title: null
    },
    colors: ['#FCC12D', '#46C1C4', '#EE6292'],
    fontSize: 10,
    fontName: 'Gilroy_Medium',
    hAxis: {
      baselineColor: '#DFE0EB',
      gridlines: {
        color: '#EBEDF0'
      },
      viewWindowMode: 'maximized',
      maxValue: 300000
    },
    legend: {
      position: 'bottom'
    }
  };
  let chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

//main chart
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
  let data = new google.visualization.DataTable();
  data.addColumn('date', '');
  data.addColumn('number', '');

  data.addRows([
    [new Date(2019, 0, 19), 90000],
    [new Date(2019, 1, 1), 10000], 
    [new Date(2019, 1, 20), 8000],
    [new Date(2019, 1, 22), 80000],
    [new Date(2019, 3, 10), 100000],
    [new Date(2019, 4, 18), 480000],
    [new Date(2019, 4, 30), 190000],
    [new Date(2019, 5, 21), 110000],
    [new Date(2019, 6, 11), 40000],
    [new Date(2019, 6, 19), 52000],
    [new Date(2019, 6, 27), 103000],
    [new Date(2019, 7, 10), 1300000],
    [new Date(2019, 8, 8), 200000],
    [new Date(2019, 9, 1), 65000],
    [new Date(2019, 10, 1), 290000]
  ]);

  let options = {
    hAxis: {
      title: '',
      textStyle: {
        color: '#4C5862',
        fontSize: 12,
        fontName: 'Gilroy_Medium'
      },
      baselineColor: '#EBEDF0',
      gridlines: {
        color: '#EBEDF0'
      },
      format: 'MMM yy'
    },
    vAxis: {
      title: '',
      textStyle: {
        color: '#4C5862',
        fontSize: 12,
        fontName: 'Gilroy_Medium'
      },
      baselineColor: '#EBEDF0',
      gridlines: {
        color: '#EBEDF0'
      }
    },
    backgroundColor: '#ffffff',
    chartArea: {
      top: '10%',
    },  
    colors: ['#F96E7D'],
    pointSize: 5
  };

  let chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}

//customers donut chart
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  let data = google.visualization.arrayToDataTable([
    ['Task', ''],
    ['reorders',  87048],
    ['rest', 13541]
  ]);

  let options = {
    title: '',
    pieHole: 0.8,
    legend: {
      position: 'none'
    },
    colors: ['#7D8997', '#DCDCDC'],
    enableInteractivity: false
  };

  let chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
  chart.draw(data, options);
}

//Display donut chart
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {
  let data = google.visualization.arrayToDataTable([
    ['Task', ''],
    ['В пути к клиенту',     75],
    ['Возврат',      12],
    ['Ожидает оплаты',    13]
  ]);

  let options = {
    title: '',
    pieHole: 0.7,
    backgroundColor: '#F5F6F8',
    colors: ['#48D2A0', '#F96E7D', '#F79E0F'],
    chartArea: {
      left: 0,
      top: 0
    },
    fontName: 'Gilroy_Medium',
    legend: {
      alignment: 'center'
    },
    pieSliceTextStyle: {
      color: '#000000',
      fontName: 'Gilroy_Bold',
      fontSize: 16
    }
  };

  let chart = new google.visualization.PieChart(document.getElementById('donutchart3'));
  chart.draw(data, options);
}
