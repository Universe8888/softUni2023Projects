function movieStars(input) {
    let budget = Number(input.shift());
    let actorIndex = 0;
  
    while (input[actorIndex] !== "ACTION" && budget > 0) {
      let actorName = input[actorIndex];
      let payment;
  
      if (actorName.length > 15) {
        payment = 0.2 * budget;
      } else {
        payment = Number(input[actorIndex + 1]);
        actorIndex++;
      }
  
      budget -= payment;
      actorIndex++;
    }
  
    if (budget >= 0) {
      console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
      console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    }
  }
  
  movieStars([
    "90000",
    "Christian Bale",
    "70000.50",
    "Leonardo DiCaprio",
    "Kevin Spacey",
    "24000.99",
  ]);
  