function sortedCatalog(products) {
    // First, we parse the input strings to obtain the product names and prices
    let parsedProducts = products.map(productStr => {
        let [name, price] = productStr.split(' : ');
        return {
            name: name,
            price: parseFloat(price)
        };
    });

    // We then sort the parsed products first by their name, then by their price
    parsedProducts.sort((a, b) => {
        if (a.name.toLowerCase() === b.name.toLowerCase()) {
            return a.price - b.price;
        }
        return a.name.localeCompare(b.name);
    });

    // We will store our results in this array
    let result = [];

    // Now, we will process each product and group them by their first letter
    let currentLetter = '';
    for (let product of parsedProducts) {
        if (product.name[0] !== currentLetter) {
            currentLetter = product.name[0];
            result.push(currentLetter);
        }
        result.push(`  ${product.name}: ${product.price}`);
    }

    // Finally, we return the results, joined by newline characters
    return result.join('\n');
}

let products1 = [
    'Apricot : 20.4', 
    'Fridge : 1500', 
    'TV : 1499', 
    'Deodorant : 10', 
    'Boiler : 300', 
    'Apple : 1.25', 
    'Anti-Bug Spray : 15', 
    'T-Shirt : 10'
];
console.log(sortedCatalog(products1));

// let products2 = [
//     'Omlet : 5.4', 
//     'Shirt : 15', 
//     'Cake : 59'
// ];
// console.log(sortedCatalog(products2));