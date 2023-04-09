function maxNumber(input) {
    let index = 0;
    let largest = Number.NEGATIVE_INFINITY;
    while (input[index] !== "Stop") {
      let number = parseInt(input[index]);
      if (!isNaN(number) && number > largest) {
        largest = number;
      }
      index++;
    }
    return largest;
  }
  
  console.log(maxNumber(["45",
  "-20",
  "7",
  "99",
  "Stop"
  ])); // Output: -1
  