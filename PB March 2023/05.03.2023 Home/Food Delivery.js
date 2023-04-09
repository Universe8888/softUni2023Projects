function foodDelivery(input) {
    // read the input values
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);
  
    // calculate the prices of the menus
    let chickenPrice = chickenMenus * 10.35;
    let fishPrice = fishMenus * 12.40;
    let vegetarianPrice = vegetarianMenus * 8.15;
  
    // calculate the total price of the menus
    let totalMenuPrice = chickenPrice + fishPrice + vegetarianPrice;
  
    // calculate the dessert price
    let dessertPrice = 0.2 * totalMenuPrice;
  
    // calculate the total order price
    let totalOrderPrice = totalMenuPrice + dessertPrice + 2.5;
  
    // print the total order price
    console.log(totalOrderPrice);
  }
  
  foodDelivery(["2 ", "4 ", "3 "]);