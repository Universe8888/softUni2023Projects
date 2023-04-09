function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];
    let pricePerNight = 0;
  
    // Determine price per night based on room type
    switch (roomType) {
      case "room for one person":
        pricePerNight = 18.00;
        break;
      case "apartment":
        pricePerNight = 25.00;
        break;
      case "president apartment":
        pricePerNight = 35.00;
        break;
      default:
        console.log("Invalid room type.");
        return;
    }
  
    // Calculate total price before discount
    let totalPrice = (days - 1) * pricePerNight;
  
    // Determine discount based on length of stay and room type
    let discount = 0;
    if (days < 10) {
      switch (roomType) {
        case "apartment":
          discount = 0.3;
          break;
        case "president apartment":
          discount = 0.1;
          break;
        default:
          discount = 0;
      }
    } else if (days >= 10 && days <= 15) {
      switch (roomType) {
        case "apartment":
          discount = 0.35;
          break;
        case "president apartment":
          discount = 0.15;
          break;
        default:
          discount = 0;
      }
    } else {
      switch (roomType) {
        case "apartment":
          discount = 0.5;
          break;
        case "president apartment":
          discount = 0.2;
          break;
        default:
          discount = 0;
      }
    }
  
    // Apply discount and rating adjustment
    let finalPrice = totalPrice * (1 - discount);
    if (rating === "positive") {
      finalPrice *= 1.25;
    } else if (rating === "negative") {
      finalPrice *= 0.9;
    } else {
      console.log("Invalid rating.");
      return;
    }
  
    // Output final price
    console.log(finalPrice.toFixed(2));
  }
  
  skiTrip(["2", "apartment", "positive"]);  // Output: 21.88
  