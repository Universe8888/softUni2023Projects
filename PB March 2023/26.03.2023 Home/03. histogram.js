function Histogram(input) {
    const n = parseInt(input[0]);
    const nums = input.slice(1);
    const counts = [0, 0, 0, 0, 0];
    const percentages = [];
  
    // count the number of numbers in each range
    for (let i = 0; i < n; i++) {
      const num = parseInt(nums[i]);
      if (num < 200) {
        counts[0]++;
      } else if (num < 400) {
        counts[1]++;
      } else if (num < 600) {
        counts[2]++;
      } else if (num < 800) {
        counts[3]++;
      } else {
        counts[4]++;
      }
    }
  
    // calculate the percentage of numbers in each range
    for (let i = 0; i < counts.length; i++) {
      const percentage = (counts[i] / n * 100).toFixed(2) + '%';
      percentages[i] = percentage;
    }
  
    // print the percentage of numbers in each range
    for (const percentage of percentages) {
      console.log(percentage);
    }
  }
  
  Histogram(["3", "1", "2", "999"]);
  