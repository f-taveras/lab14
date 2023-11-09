'use strict';

let canvasElem = document.getElementById('chart');

function renderChart() {
  // Instantiate a new AppState
  const appState = new AppState();

  // Use a method on AppState to load vote data from localStorage
  appState.loadItems();

  // Create a data object for chart.js using AppState's allProducts array
  const productNames = appState.allProducts.map(product => product.name);
  const voteTotals = appState.allProducts.map(product => product.timesClicked);

  const data = {
    labels: productNames,
    datasets: [
      {
        label: 'Votes',
        data: voteTotals,
        backgroundColor: 'rgba(12, 23, 232)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,

      },
    ],
  };

  // Combine the data object with configuration information for chart.js
  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  console.log(data);

  // Call chart.js with the configuration and the canvasElem
  new Chart(canvasElem, config);
}

renderChart();

