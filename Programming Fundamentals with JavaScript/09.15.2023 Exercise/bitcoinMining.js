function calculateBitcoins(goldMined) {
    const bitcoinValue = 11949.16;
    const goldValue = 67.51;
    let totalMoney = 0;
    let bitcoinCount = 0;
    let firstBitcoinDay = -1;

    for (let i = 0; i < goldMined.length; i++) {
        
        let dailyGold = (i + 1) % 3 === 0 ? goldMined[i] * 0.7 : goldMined[i];
        
        
        totalMoney += dailyGold * goldValue;

        
        while (totalMoney >= bitcoinValue) {
            bitcoinCount++;
            totalMoney -= bitcoinValue;

            
            if (firstBitcoinDay === -1) {
                firstBitcoinDay = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstBitcoinDay !== -1) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

calculateBitcoins([100, 200, 300]);
