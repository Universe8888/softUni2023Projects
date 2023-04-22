function hairSalon(input) {
    const target = Number(input.shift());
    let revenue = 0;
  
    while (true) {
      const command = input.shift();
  
      if (command === "closed") {
        break;
      }
  
      if (command === "haircut") {
        const haircutType = input.shift();
        switch (haircutType) {
          case "mens":
            revenue += 15;
            break;
          case "ladies":
            revenue += 20;
            break;
          case "kids":
            revenue += 10;
            break;
          default:
            break;
        }
      } else if (command === "color") {
        const colorType = input.shift();
        switch (colorType) {
          case "touch up":
            revenue += 20;
            break;
          case "full color":
            revenue += 30;
            break;
          default:
            break;
        }
      }
  
      if (revenue >= target) {
        console.log("You have reached your target for the day!");
        console.log(`Earned money: ${revenue}lv.`);
        return;
      }
    }
  
    console.log(`Target not reached! You need ${target - revenue}lv. more.`);
    console.log(`Earned money: ${revenue}lv.`);
  }

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])
