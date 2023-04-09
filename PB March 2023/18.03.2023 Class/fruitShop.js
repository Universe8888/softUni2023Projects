function fruitShop(input) {
    let product = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
  
    let priceTable;
  
    switch (dayOfWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        priceTable = {
          banana: 2.50,
          apple: 1.20,
          orange: 0.85,
          grapefruit: 1.45,
          kiwi: 2.70,
          pineapple: 5.50,
          grapes: 3.85
        };
        break;
      case "Saturday":
      case "Sunday":
        priceTable = {
          banana: 2.70,
          apple: 1.25,
          orange: 0.90,
          grapefruit: 1.60,
          kiwi: 3.00,
          pineapple: 5.60,
          grapes: 4.20
        };
        break;
      default:
        console.log("error");
        return;
    }
  
    let price = priceTable[product];
    if (price === undefined) {
      console.log("error");
      return;
    }
  
    let totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
  }
  
  fruitShop(["apple","Tuesday","2"]);