function catDiet(input) {
    let fatPercent = Number(input[0]);
    let proteinPercent = Number(input[1]);
    let carbPercent = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercent = Number(input[4]);
  
    // Calculate grams of macronutrients
    let fatGrams = (fatPercent/100) * totalCalories / 9;
    let proteinGrams = (proteinPercent/100) * totalCalories / 4;
    let carbGrams = (carbPercent/100) * totalCalories / 4;
  
    // Calculate total food weight
    let totalWeight = fatGrams + proteinGrams + carbGrams;
  
    let caloriesPerOnceGramFood = totalCalories /totalWeight;
  
    let dryFood = (1 - (waterPercent/100)) / ((fatPercent/900) + (proteinPercent/400) + (carbPercent/400));
  
    console.log(dryFood.toFixed(4));
  }
  
  catDiet(["60",
    "25",
    "15",
    "2500",
    "60"]);
  