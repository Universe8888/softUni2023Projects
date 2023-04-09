function walking(input) {
    let steps = 0;
    let index = 0;
    
    while (index < input.length) {
        let current = input[index];
        
        if (current === "Going home") {
            index++;
            let goingHomeSteps = Number(input[index]);
            steps += goingHomeSteps;
            break;
        }
        
        steps += Number(current);
        index++;
    }
    
    if (steps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - steps} more steps to reach goal.`);
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);



  
  
  
  
  