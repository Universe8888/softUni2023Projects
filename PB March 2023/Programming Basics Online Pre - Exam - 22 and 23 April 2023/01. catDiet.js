function catDiet(input) {
    let fatsPercent = Number(input[0]);
    let proteinPercent = Number(input[1]);
    let carbPercent = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercent = Number(input[4]);

    let fatGrams = (fatsPercent * totalCalories) / 9;
    let proteinGrams = (proteinPercent * totalCalories) / 4;
    let carbGrams = (carbPercent * totalCalories) / 4;

    let foodWeight = fatGrams + proteinGrams + carbGrams;
    let wetFoodWeight = foodWeight / (1 - waterPercent / 100);
    let dryFoodWeight = wetFoodWeight * (1 - waterPercent / 100);

    let caloriesPerGram = totalCalories / foodWeight;
    let nonWaterCaloriesPerGram = caloriesPerGram / (1 - waterPercent / 100);

    return nonWaterCaloriesPerGram.toFixed(4);
}

console.log(catDiet(["60", "25", "15", "2500", "60"]));
