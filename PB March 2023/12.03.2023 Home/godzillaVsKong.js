function godzillaVsKong(input) {
    let budget = Number(input[0]); // Get the budget from the first input parameter
    let countStatists = Number(input[1]); // Get the number of extras from the second input parameter
    let priceForClothForOneStatist = Number(input[2]); // Get the cost per extra from the third input parameter
    let decorCost = budget * 0.1; // Calculate the cost of the decor (10% of the budget)
    let clothesCost = countStatists * priceForClothForOneStatist; // Calculate the cost of the clothes for the extras
  
    // Apply a 10% discount to the clothes cost if there are more than 150 extras
    if (countStatists > 150) {
      clothesCost *= 0.9;
    }
  
    let totalCost = decorCost + clothesCost; // Calculate the total cost of the film
  
    // Check if the total cost is greater than the budget
    if (totalCost > budget) {
      let notEnoughMoney = (totalCost - budget).toFixed(2); // Calculate the amount of money needed to make the film
      console.log("Not enough money!");
      console.log(`Wingard needs ${notEnoughMoney} leva more.`); // Print the amount of money needed to make the film
    } else {
      let moneyLeft = (budget - totalCost).toFixed(2); // Calculate the amount of money left after making the film
      console.log("Action!");
      console.log(`Wingard starts filming with ${moneyLeft} leva left.`); // Print the amount of money left after making the film
    }
  }
  
  
  godzillaVsKong(["15437.62",
  "186",
  "57.99"])
  ; //Action! 
    //Wingard starts filming with 4186.33 leva left.

  
