function smallShop(input) {
    // Extract the input values from the array
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
  
    // Initialize the price variable to 0
    let price = 0;
  
    // Use a switch statement to check the city
    switch (city) {
      case "Sofia":
        // If the city is Sofia, use if-else statements to check the product
        if (product === "coffee") {
          price = quantity * 0.5; // Calculate the price for coffee
        } else if (product === "water") {
          price = quantity * 0.8; // Calculate the price for water
        } else if (product === "beer") {
          price = quantity * 1.2; // Calculate the price for beer
        } else if (product === "sweets") {
          price = quantity * 1.45; // Calculate the price for sweets
        } else if (product === "peanuts") {
          price = quantity * 1.6; // Calculate the price for peanuts
        } else {
          console.log("Unknown product"); // If the product is unknown, log an error message
        }
        break;
      case "Plovdiv":
        // If the city is Plovdiv, use a nested switch statement to check the product
        switch (product) {
          case "coffee":
            price = quantity * 0.4; // Calculate the price for coffee
            break;
          case "water":
            price = quantity * 0.7; // Calculate the price for water
            break;
          case "beer":
            price = quantity * 1.15; // Calculate the price for beer
            break;
          case "sweets":
            price = quantity * 1.3; // Calculate the price for sweets
            break;
          case "peanuts":
            price = quantity * 1.5; // Calculate the price for peanuts
            break;
          default:
            console.log("Unknown product"); // If the product is unknown, log an error message
        }
        break;
      case "Varna":
        // If the city is Varna, use a nested switch statement to check the product
        switch (product) {
          case "coffee":
            price = quantity * 0.45; // Calculate the price for coffee
            break;
          case "water":
            price = quantity * 0.7; // Calculate the price for water
            break;
          case "beer":
            price = quantity * 1.1; // Calculate the price for beer
            break;
          case "sweets":
            price = quantity * 1.35; // Calculate the price for sweets
            break;
          case "peanuts":
            price = quantity * 1.55; // Calculate the price for peanuts
            break;
          default:
            console.log("Unknown product"); // If the product is unknown, log an error message
        }
        break;
      default:
        console.log("Unknown city"); // If the city is unknown, log an error message
    }
  
    // Check if the price is not 0 (i.e., a valid price was calculated)
    if (price !== 0) {
      console.log(price); // Log the calculated price
    }
  }
  
  // Call the function with the given input
  smallShop(["sweets", "Sofia", "2.23"]); // output: 3.2435
  
  