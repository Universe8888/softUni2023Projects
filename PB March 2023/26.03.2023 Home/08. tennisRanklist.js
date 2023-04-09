function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let pointsWon = 0;
    let tournamentsWon = 0;

    for(let i = 2; i < input.length; i++) {
      let tournamentResult = input[i];

      if(tournamentResult === 'W') {
        pointsWon += 2000
        tournamentsWon++;
      } else if(tournamentResult === 'F') {
        pointsWon += 1200
      } else {
        pointsWon += 720;
      }
    }

    console.log(`Final points: ${startingPoints + pointsWon}`);

    let avgPoints = Math.floor(pointsWon / tournamentsCount);
    console.log(`Average points: ${avgPoints}`);

    let tournamentsWonPercent = (tournamentsWon / tournamentsCount) * 100;
    console.log(`${tournamentsWonPercent.toFixed(2)}%`);
  }
  
  tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]); // to ask in HomeWork: https://pastebin.com/yDGqKDhM
  


  // function tennisRanklist(input) {
  //   let numberOfTournaments = Number(input[0]);
  //   let startingPoints = Number(input[1]);
  //   let totalPoints = startingPoints;
  //   let numWins = 0;
    
  //   for (let i = 0; i < numberOfTournaments; i++) {
  //     let stage = input[i+2];
      
  //     if (stage === 'W') {
  //       totalPoints += 2000;
  //       numWins++;
  //     } else if (stage === 'F') {
  //       totalPoints += 1200;
  //     } else if (stage === 'SF') {
  //       totalPoints += 720;
  //     }
  //   }
    
  //   let averagePoints = Math.floor(totalPoints / numberOfTournaments);
  //   let percentageWins = ((numWins / numberOfTournaments) * 100).toFixed(2);
    
  //   console.log(`Final points: ${totalPoints}`);
  //   console.log(`Average points: ${averagePoints}`);
  //   console.log(`${percentageWins}%`);
  // }