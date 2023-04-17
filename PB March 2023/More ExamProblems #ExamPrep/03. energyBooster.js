function energyBooster (input) {
    let fruit = String(input[0]);
    let setSize = String(input[1]);
    let numOfSets = Number(input[2]);

    let pieces = {
        Watermelon: {small: 56, large: 28.7},
        Mango: { small: 36.66, large: 19.6 },
        Pineapple: { small: 42.1, large: 24.8 },
        Raspberry: { small: 20, large: 15.2 }
    };

    let pricePerGel = pieces[fruit][setSize === 'small' ? 'small' : 'large'];
    let totalPrice = numOfSets * (setSize === 'small' ? 2 : 5) * pricePerGel;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85;
    } else if (totalPrice > 1000) {
        totalPrice *= 0.5;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);

}

energyBooster(["Watermelon",
"big",
"4"]);