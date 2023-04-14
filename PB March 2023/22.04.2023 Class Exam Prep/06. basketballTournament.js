function basketballTournaments(input) {
    let index = 0;
    let totalGames = 0;
    let totalWins = 0;
    let totalLosses = 0;
  
    while (input[index] !== 'End of tournaments') {
      let tournamentName = input[index];
      let numOfMatches = Number(input[index + 1]);
      index += 2;
  
      for (let i = 1; i <= numOfMatches; i++) {
        let desiPoints = Number(input[index]);
        let opponentPoints = Number(input[index + 1]);
        index += 2;
  
        if (desiPoints > opponentPoints) {
          console.log(`Game ${i} of tournament ${tournamentName}: win with ${desiPoints - opponentPoints} points.`);
          totalWins++;
        } else {
          console.log(`Game ${i} of tournament ${tournamentName}: lost with ${opponentPoints - desiPoints} points.`);
          totalLosses++;
        }
        totalGames++;
      }
    }
  
    console.log(`${(totalWins / totalGames * 100).toFixed(2)}% matches win`);
    console.log(`${(totalLosses / totalGames * 100).toFixed(2)}% matches lost`);
  }
  
  basketballTournaments([
    "dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"
  ]);
  