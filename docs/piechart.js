var options = {
  chart: {
    height: 350,
    type: "radialBar",
  },
  series: [75],
};

var chart = new ApexCharts(document.querySelector("#pie-chart"), options);

chart.render();
