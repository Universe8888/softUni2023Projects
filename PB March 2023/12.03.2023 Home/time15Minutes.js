function time15Minutes(input) {
    let hour = Number(input[0]);
    let minute = Number(input[1]);
  
    // Calculate time after 15 minutes
    let newMinute = (minute + 15) % 60;
    let newHour = hour + Math.floor((minute + 15) / 60);
    newHour %= 24; // Ensure the hour is between 0 and 23
  
    // Format the time as a string
    let formattedHour = newHour.toString();
    let formattedMinute = (newMinute < 10 ? '0' : '') + newMinute.toString();
    let formattedTime = `${formattedHour}:${formattedMinute}`;
  
    console.log(formattedTime);
  }
  
  time15Minutes(["0", "01"]); // Output: "0:16"
  
  