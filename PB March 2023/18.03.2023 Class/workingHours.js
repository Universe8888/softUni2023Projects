function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];
  
    // Use a switch statement to set the isWeekday variable based on the input day
    let isWeekday = 0;
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        isWeekday = "open";
        break;
      case "Saturday":
        isWeekday = "closed";
        break;
      default:
        // Assume the office is closed on Sundays and all other days
        return "closed";
    }
  
    // Check if the office is open during the input time on the input day
    let isOpen = isWeekday && hour >= 10 && hour < 18;
  
    // Use a let variable to store the result
    let result;
    if (isOpen) {
      result = "open";
    } else {
      result = "closed";
    }
  
    // Return the result
    console.log(result);
  }
  

workingHours(["11","Monday"]);