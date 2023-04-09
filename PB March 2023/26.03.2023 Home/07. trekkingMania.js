function trekkingMania(input) {
    let groups = input.slice(1); // Extract the groups from the input array
    let totalClimbers = groups.reduce((acc, curr) => acc + parseInt(curr), 0); // Calculate the total number of climbers
    let musalaClimbers = 0;
    let montBlancClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;
  
    // Count the number of climbers for each peak
    groups.forEach(group => {
      let numClimbers = parseInt(group);
      if (numClimbers <= 5) {
        musalaClimbers += numClimbers;
      } else if (numClimbers <= 12) {
        montBlancClimbers += numClimbers;
      } else if (numClimbers <= 25) {
        kilimanjaroClimbers += numClimbers;
      } else if (numClimbers <= 40) {
        k2Climbers += numClimbers;
      } else {
        everestClimbers += numClimbers;
      }
    });
  
    // Calculate the percentages for each peak and print them
    console.log((musalaClimbers / totalClimbers * 100).toFixed(2) + "%");
    console.log((montBlancClimbers / totalClimbers * 100).toFixed(2) + "%");
    console.log((kilimanjaroClimbers / totalClimbers * 100).toFixed(2) + "%");
    console.log((k2Climbers / totalClimbers * 100).toFixed(2) + "%");
    console.log((everestClimbers / totalClimbers * 100).toFixed(2) + "%");
  }
  
  trekkingMania(["10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78"]);
  