function onTimeForTheExam(input) {
    let examHour = parseInt(input[0]);
    let examMinute = parseInt(input[1]);
    let arrivalHour = parseInt(input[2]);
    let arrivalMinute = parseInt(input[3]);
  
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let timeDiff = arrivalTime - examTime;
  
    if (timeDiff > 0) {
      console.log("Late");
    } else if (timeDiff >= -30) {
      console.log("On time");
    } else {
      console.log("Early");
    }
  
    if (timeDiff != 0) {
      let absTimeDiff = Math.abs(timeDiff);
      let hours = Math.floor(absTimeDiff / 60);
      let minutes = absTimeDiff % 60;
  
      if (hours > 0) {
        console.log(`${hours}:${minutes.toString().padStart(2, "0")} hours ${timeDiff > 0 ? "after" : "before"} the start`);
      } else {
        console.log(`${Math.floor(minutes)} minutes ${timeDiff >= 0 ? "after" : "before"} the start`);
      }
    }
  }
  
  
  
onTimeForTheExam(["11",
"30",
"12",
"29"])

