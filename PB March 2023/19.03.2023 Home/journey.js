function journey(input) {
  let budget = Number(input[0]);
  let season = input[1].toLowerCase();
  let destination = "";
  let vacationType = "";
  let amountSpent = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      vacationType = "Camp";
      amountSpent = budget * 0.3;
    } else if (season === "winter") {
      vacationType = "Hotel";
      amountSpent = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      vacationType = "Camp";
      amountSpent = budget * 0.4;
    } else if (season === "winter") {
      vacationType = "Hotel";
      amountSpent = budget * 0.8;
    }
  } else {
    destination = "Europe";
    vacationType = "Hotel";
    amountSpent = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${vacationType} - ${amountSpent.toFixed(2)}`);
}

journey(["50", "summer"]);
