function coins(input) {
    const coinValues = [200, 100, 50, 20, 10, 5, 2, 1];
    let change = Number(input[0]) * 100;
    let coinCount = 0;

    for (let i = 0; i < coinValues.length; i++) {
        while (change >= coinValues[i]) {
            change -= coinValues[i];
            coinCount++;
        }
    }

    return coinCount;
}

console.log(coins(["2"]));
