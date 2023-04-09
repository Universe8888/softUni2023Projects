function newHouse(input) {
    let type = input[0];
    let pieces = Number(input[1]);
    let budget = Number(input[2]);
  
    let flowerPrices = {
      Roses: 5,
      Dahlias: 3.8,
      Tulips: 2.8,
      Narcissus: 3,
      Gladiolus: 2.5,
    };
  
    let totalPrice = pieces * flowerPrices[type];
  
    // Apply discounts
    if (type === "Roses" && pieces > 80) {
      totalPrice *= 0.9;
    } else if (type === "Dahlias" && pieces > 90) {
      totalPrice *= 0.85;
    } else if (type === "Tulips" && pieces > 80) {
      totalPrice *= 0.85;
    }
  
    // Apply price adjustments
    if (type === "Narcissus" && pieces < 120) {
      totalPrice *= 0.85;
    } else if (type === "Gladiolus" && pieces < 80) {
      totalPrice *= 1.2;
    }
  
    const amountLeft = budget - totalPrice;
    const amountNeeded = totalPrice - budget;
  
    if (budget >= totalPrice) {
      console.log(
        `Hey, you have a great garden with ${pieces} ${type} and ${amountLeft.toFixed(
          2
        )} leva left.`
      );
    } else {
      console.log(
        `Not enough money, you need ${amountNeeded.toFixed(2)} leva more.`
      );
    }
  }
  
  newHouse(["Roses","55","250"]);
  