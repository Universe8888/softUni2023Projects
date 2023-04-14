function trekkingMania(input) {
    let groups = parseInt(input[0]);
    let totalClimbers = 0;
  
    let musalaClimbers = 0;
    let montBlancClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;
  
    for (let i = 1; i <= groups; i++) {
      let climbersInGroup = parseInt(input[i]);
      totalClimbers += climbersInGroup;
  
      if (climbersInGroup <= 5) {
        musalaClimbers += climbersInGroup;
      } else if (climbersInGroup <= 12) {
        montBlancClimbers += climbersInGroup;
      } else if (climbersInGroup <= 25) {
        kilimanjaroClimbers += climbersInGroup;
      } else if (climbersInGroup <= 40) {
        k2Climbers += climbersInGroup;
      } else {
        everestClimbers += climbersInGroup;
      }
    }
  
    console.log(`${(musalaClimbers / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(montBlancClimbers / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaroClimbers / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(k2Climbers / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(everestClimbers / totalClimbers * 100).toFixed(2)}%`);
  }
  
  trekkingMania([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78",
  ]);
  