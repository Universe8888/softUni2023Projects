function fishingTrip(input) {
    let groupBudget = Number(input[0]);
    let season = input[1];
    let numFishermen = Number(input[2]);
  
    let price;
    
    switch (season) {
      case "Spring":
        price = 3000;
        break;
      case "Summer":
      case "Autumn":
        price = 4200;
        break;
      case "Winter":
        price = 2600;
        break;
    }
    
    if (numFishermen <= 6) {
      price *= 0.9;
    } else if (numFishermen <= 11) {
      price *= 0.85;
    } else {
      price *= 0.75;
    }
    
    if (season !== "Autumn" && numFishermen % 2 === 0) {
      price *= 0.95;
    }
    
    if (price <= groupBudget) {
      let remainingMoney = (groupBudget - price).toFixed(2);
      console.log(`Yes! You have ${remainingMoney} leva left.`);
    } else {
      let amountNeeded = (price - groupBudget).toFixed(2);
      console.log(`Not enough money! You need ${amountNeeded} leva.`);
    }
  }
  
  fishingTrip([3000, "Summer", 11]); // Output: Not enough money! You need 570.00 leva.
  