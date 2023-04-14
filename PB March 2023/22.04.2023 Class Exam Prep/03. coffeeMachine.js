function coffeeMachine(input) {
        let drink = String(input[0]);
        let SugarOptions = String(input[1]);
        let drinksCount = parseInt(input[2]);

        let pricePerDrink = 0;
        switch (drink) {
          case "Espresso":
            switch (SugarOptions) {
              case "Without":
                pricePerDrink = 0.9;
                break;
              case "Normal":
                pricePerDrink = 1;
                break;
              case "Extra":
                pricePerDrink = 1.2;
                break;
            }
            break;
          case "Cappuccino":
            switch (SugarOptions) {
              case "Without":
                pricePerDrink = 1;
                break;
              case "Normal":
                pricePerDrink = 1.2;
                break;
              case "Extra":
                pricePerDrink = 1.6;
                break;
            }
            break;
          case "Tea":
            switch (SugarOptions) {
              case "Without":
                pricePerDrink = 0.5;
                break;
              case "Normal":
                pricePerDrink = 0.6;
                break;
              case "Extra":
                pricePerDrink = 0.7;
                break;
            }
            break;
        }
      
        let totalPrice = pricePerDrink * drinksCount;
      
        if (SugarOptions === "Without") {
          totalPrice *= 0.65;
        }
      
        if (drink === "Espresso" && drinksCount >= 5) {
          totalPrice *= 0.75;
        }
      
        if (totalPrice > 15) {
          totalPrice *= 0.8;
        }
      
        console.log(`You bought ${drinksCount} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`);
}
      


coffeeMachine(["Espresso",
"Without",
"10"]);