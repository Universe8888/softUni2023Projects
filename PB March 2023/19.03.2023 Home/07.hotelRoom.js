function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1])
    const isMayOrOctober = month === "May" || month === "October";
    const isJuneOrSeptember = month === "June" || month === "September";
    const isJulyOrAugust = month === "July" || month === "August";
    const roomType = nights > 1 ? "Apartment" : "Studio";
    
    let priceStudio = 0;
    let priceApartment = 0;
    
    // Calculate prices for studio and apartment based on the given month and number of nights
    if (isMayOrOctober) {
      priceStudio = nights > 14 ? 0.7 * 50 * nights : nights > 7 ? 0.95 * 50 * nights : 50 * nights;
      priceApartment = 65 * nights;
    } else if (isJuneOrSeptember) {
      priceStudio = nights > 14 ? 0.8 * 75.20 * nights : 0.8 * 75.20 * nights;
      priceApartment = 68.70 * nights;
    } else if (isJulyOrAugust) {
      priceStudio = 76 * nights;
      priceApartment = 77 * nights;
    }
    
    // Apply discount for apartment for more than 14 nights
    if (roomType === "Apartment" && nights > 14) {
      priceApartment *= 0.9;
    }
    
    // Apply discount for studio for more than 7 nights in May and October and more than 14 nights in May and October or June and September
    if (roomType === "Studio") {
      if (isMayOrOctober && nights > 14) {
        priceStudio *= 0.7 * 0.7;
      } else if (isMayOrOctober && nights > 7) {
        priceStudio *= 0.95;
      } else if (isJuneOrSeptember && nights > 14) {
        priceStudio *= 0.8;
      }
    }
    
    // Format the prices to two decimal places and print the result
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
  }
  
  hotelRoom(["May", "15"]);