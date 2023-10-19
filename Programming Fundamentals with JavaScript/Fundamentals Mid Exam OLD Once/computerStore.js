function compStore(pricesAndType) {
    let totalWithoutTaxes = 0;
    let taxRate = 0.20;

    for (let i = 0; i < pricesAndType.length; i++) {
        let current = pricesAndType[i];

        if (current === "special" || current === "regular") {
            let taxes = totalWithoutTaxes * taxRate;
            let totalPrice = totalWithoutTaxes + taxes;

            if (current === "special") {
                totalPrice *= 0.90;
            }

            if (totalWithoutTaxes === 0) {
                console.log("Invalid order!");
            } else {
                console.log("Congratulations you've just bought a new computer!");
                console.log(`Price without taxes: ${totalWithoutTaxes.toFixed(2)}$`);
                console.log(`Taxes: ${taxes.toFixed(2)}$`);
                console.log(`-----------`);
                console.log(`Total price: ${totalPrice.toFixed(2)}$`);
            }
            break;
        } else {
            let price = parseFloat(current);

            if (price <= 0) {
                console.log("Invalid price!");
                continue;
            }

            totalWithoutTaxes += price;
        }
    }
}

compStore([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ]);