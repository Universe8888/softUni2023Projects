function sumNumbers(input) {
    const target = parseInt(input[0]); // Parse the target sum from the first element
    let sum = 0;
    let i = 1;
    while (sum < target && i < input.length) { // Continue iterating until the sum is greater than or equal to the target, or we reach the end of the array
      sum += parseInt(input[i]); // Add the current number to the sum
      i++; // Move to the next element
    }
    console.log(sum); // Print the final sum
  }
  
sumNumbers(["100",
"10",
"20",
"30",
"40"]);

