function calculateBitcoins(goldMined) {
    const bitcoinValue = 11949.16;
    const goldValue = 67.51;
    let totalMoney = 0;
    let bitcoinCount = 0;
    let firstBitcoinDay = -1;

    for (let i = 0; i < goldMined.length; i++) {
        // Reduce gold mined by 30% every third day
        let dailyGold = (i + 1) % 3 === 0 ? goldMined[i] * 0.7 : goldMined[i];
        
        // Convert gold mined to its value in lv
        totalMoney += dailyGold * goldValue;

        // Buy as many bitcoins as we can
        while (totalMoney >= bitcoinValue) {
            bitcoinCount++;
            totalMoney -= bitcoinValue;

            // Check and save the day we bought the first bitcoin
            if (firstBitcoinDay === -1) {
                firstBitcoinDay = i + 1;
            }
        }
    }

    // Print results
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstBitcoinDay !== -1) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

// Test case
calculateBitcoins([100, 200, 300]);
