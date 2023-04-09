function oscars(input) {
    let nameOfActor = input[0];
    let pointsFromAcademy = Number(input[1]);
    let numOfEvaluators = Number(input[2]);
    let totalPoints = pointsFromAcademy;
    
    for (let i = 0; i < numOfEvaluators; i++) {
      let evaluatorName = input[3 + 2 * i];
      let evaluatorScore = Number(input[4 + 2 * i]);
      let pointsToAdd = evaluatorScore * evaluatorName.length / 2;
      totalPoints += pointsToAdd;
      
      if (totalPoints > 1250.05) {
        console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
        return;
      }
    }
    
    let pointsNeeded = (1250.5 - totalPoints).toFixed(1);
    console.log(`Sorry, ${nameOfActor} you need ${pointsNeeded} more!`);

  }
  
  oscars(["Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39"]);
  
