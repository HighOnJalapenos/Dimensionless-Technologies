function generateDataPoints(count) {
  let data = [];
  for (let i = 0; i < count; i++) {
    let x = randomTime();
    let y = Math.floor(Math.random() * 100) + 1;
    let z = Math.floor(Math.random() * 10) + 1;
    data.push({ x, y, z });
  }
  return data;
}

function randomTime() {
  let hours = 12;
  let minutes = Math.floor(Math.random() * 60);
  let seconds = Math.floor(Math.random() * 60);
  return new Date(0, 0, 0, hours, minutes, seconds);
}

var options = {
  chart: {
    type: "bubble",
    height: "350",
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "Type A",
      data: generateDataPoints(10, 10),
    },
    {
      name: "Type B",
      data: generateDataPoints(10, 20),
    },
    {
      name: "Type C",
      data: generateDataPoints(10, 30),
    },
  ],
  xaxis: {
    type: "datetime",
    labels: {
      datetimeFormatter: {
        year: "none",
        month: "none",
        day: "none",
        hour: "HH:mm",
      },
    },
  },
  tooltip: {
    x: {
      format: "HH:mm",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#bubble-chart"), options);
chart.render();
