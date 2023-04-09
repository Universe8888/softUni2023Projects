function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
  
    let totalMoneySaved = 0;
    let moneyGift = 10;
  
    for (let i = 1; i <= age; i++) {
      if (i % 2 === 0) {
        totalMoneySaved += moneyGift - 1;
        moneyGift += 10;
      } else {
        // odd age -> gets a toy
        // nothing happens with the money
      }
    }
  
    let totalToyMoney = Math.floor((age + 1) / 2) * toyPrice;
    let finalMoneySaved = totalMoneySaved + totalToyMoney;
  
    if (finalMoneySaved >= washingMachinePrice) {
      let remainingMoney = finalMoneySaved - washingMachinePrice;
      console.log(`Yes! ${remainingMoney.toFixed(2)}`);
    } else {
      let neededMoney = washingMachinePrice - finalMoneySaved;
      console.log(`No! ${neededMoney.toFixed(2)}`);
    }
  }
  
  cleverLily(["21",
  "1570.98",
  "3"])
  
   // Output: "No! 997.98"
  