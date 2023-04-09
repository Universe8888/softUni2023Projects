function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
  
    // Check for invalid input
    if (sales < 0 || (city !== "Sofia" && city !== "Varna" && city !== "Plovdiv")) {
      console.log("error");
    } else {
  
      let commission;
  
      // Calculate commission based on city and sales volume
      switch(city) {
        case "Sofia":
          if (sales <= 500) {
            commission = sales * 0.05;//5%
          } else if (sales <= 1000) {
            commission = sales * 0.07;//7%
          } else if (sales <= 10000) {
            commission = sales * 0.08;//8%
          } else {
            commission = sales * 0.12;//12%
          }
          break;
        case "Varna":
          if (sales <= 500) {
            commission = sales * 0.045;//4.5%
          } else if (sales <= 1000) {
            commission = sales * 0.075;//7.5%
          } else if (sales <= 10000) {
            commission = sales * 0.1;//10%
          } else {
            commission = sales * 0.13;//13%
          }
          break;
        case "Plovdiv":
          if (sales <= 500) {
            commission = sales * 0.055;//5.5%
          } else if (sales <= 1000) {
            commission = sales * 0.08;//8%
          } else if (sales <= 10000) {
            commission = sales * 0.12;//12%
          } else {
            commission = sales * 0.145; //14.5%
          }
          break;
      }
  
      console.log(commission.toFixed(2));
    }
  }
  
  tradeCommissions(["Sofia", "1500"]); // Output: 105.00
  