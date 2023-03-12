const ctx = document.getElementById("myChart");
const second = document.getElementById("secondChart");
const third = document.getElementById("thirdChart");

const getData = async () => {
  try {
    const response = await fetch("/api/graph/activities");
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const myData = async () => {
  const data = await getData();
  console.log(data);
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map((row) => row.entry_date),
      datasets: [
        {
          label: "duration",
          data: data.map((row) => row.duration),
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

myData();

const myData2 = async () => {
  const data = await getData();
  new Chart(second, {
    type: "doughnut",
    data: {
      labels: data.map((row) => row.entry_date),
      datasets: [
        {
          label: "duration",
          data: data.map((row) => row.duration),
          borderWidth: 1,
        },
      ],
    },
  });
};

myData2();

const myData3 = async () => {
  const data = await getData();
  new Chart(third, {
    type: "line",
    data: {
      labels: data.map((row) => row.entry_date),
      datasets: [
        {
          label: "duration",
          data: data.map((row) => row.duration),
          borderWidth: 1,
        },
      ],
    },
  });
};

myData3();
