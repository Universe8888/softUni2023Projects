function fishTank(input) {
    let length = Number(input[0].trim());
    let width = Number(input[1].trim());
    let height = Number(input[2].trim());
    let percentage = Number(input[3].trim()) / 100;
    let volume = (length * width * height) / 1000;
    let liters = volume * (1 - percentage);
    console.log(liters.toFixed(5));
  }
  
  fishTank(["85 ", "75 ", "47 ", "17 "]); // Output: 248.68875
   