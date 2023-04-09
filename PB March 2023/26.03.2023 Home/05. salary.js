function salary(input) {
    let openedTabs = Number(input[0]);
    let salary = Number(input[1]);
    
    // Iterate over each tab name and apply fines as needed
    for (let i = 2; i < 2 + openedTabs; i++) {
      let tab = input[i];
      switch (tab) {
        case "Facebook":
          salary -= 150;
          break;
        case "Instagram":
          salary -= 100;
          break;
        case "Reddit":
          salary -= 50;
          break;
        default:
          break;
      }
      
      // Check if salary has gone negative and end the program if it has
      if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
      }
    }
    
    // Print the remaining salary if it is positive
    console.log(salary);
  }
  
  salary(["10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook"]);
  