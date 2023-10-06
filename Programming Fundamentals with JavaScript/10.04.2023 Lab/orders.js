function calculateTotalPrice(product, quantity) {
    
    let prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };
    
    
    if(prices[product] !== undefined) {
        let totalPrice = prices[product] * quantity;
        
        
        console.log(totalPrice.toFixed(2));
    } else {
        console.log("Product not available");
    }
}

calculateTotalPrice("coffee", 2);