function petShop(input) {
   
    let DOG_FOOD_COST = 2.5;
    let CAT_FOOD_COST = 4;
    
    // Get the number of dogs and cats from the user input array
    let numDogs = input[0];
    let numCats = input[1];
    
    // Calculate the total cost of dog and cat food in pounds
    let dogFoodCost = numDogs * DOG_FOOD_COST;
    let catFoodCost = numCats * CAT_FOOD_COST;
    let totalCostInlv= dogFoodCost + catFoodCost;
    
    // Display the results to the user
    console.log(`${totalCostInlv} lv.`);

}

petShop(["4", "3"]);