'use strict';

let canvasElem = document.getElementById('chart');

function renderChart() {
 
  const appState = new AppState();

  
  appState.loadItems();

 
  const productNames = appState.allProducts.map(product => product.name);
  const voteTotals = appState.allProducts.map(product => product.timesClicked);

  const data = {
    labels: productNames,
    datasets: [
      {
        label: 'Votes',
        data: voteTotals,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  
  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

 
  new Chart(canvasElem, config);
}

renderChart();

