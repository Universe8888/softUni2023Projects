function catWalking(input) {
    let minutesWalkingPerDay = Number(input[0]);
    let numberOfWalksPerDay = Number(input[1]);
    let caloriesEatenByCatPerDay = Number(input[2]);
    
    let totalCaloriesBurned = minutesWalkingPerDay * numberOfWalksPerDay * 5;
    let caloriesThreshold = caloriesEatenByCatPerDay * 0.5;

    if (totalCaloriesBurned >= caloriesThreshold) {
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurned}.`);
    } else {
  console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurned}.`);
    }
    
}

catWalking(["30",
"3",
"600"]);