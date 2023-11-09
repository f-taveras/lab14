function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {
  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }
}

AppState.prototype.saveToLocalStorage = function () {
  // Convert the array of products to a JSON string and store it in local storage
  localStorage.setItem('productsData', JSON.stringify(this.allProducts));
}

AppState.prototype.loadItems = function () {
  // Retrieve data from local storage and parse it back to an array of product objects
  const productsDataString = localStorage.getItem('productsData');
  
  if (productsDataString) {
    this.allProducts = JSON.parse(productsDataString);
  } else {
    // If no data is found in local storage, instantiate products
    this.instantiateProducts();
  }
}

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
