function storeProvision(stock, delivery) {
    const products = {};

    function addProductsToStore(arr){

        for (let i = 0; i < arr.length; i += 2){
            const productName = arr[i];
            const productQuantity = Number(arr[i + 1]);

            if (products.hasOwnProperty(productName)) {
                products[productName] += productQuantity;
            } else {
                products[productName] = productQuantity;
            }
        }
    }

    function printProducts() {
        for (let product in products) {
            console.log(`${product} -> ${products[product]}`);
        }
    }

    addProductsToStore(stock);
    addProductsToStore(delivery);
    printProducts();
    
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);

// storeProvision(
//     ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
// );