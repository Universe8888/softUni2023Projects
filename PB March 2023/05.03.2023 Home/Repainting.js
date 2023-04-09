function repaint(input) {
    let nylonPrice = 1.50; // price per square meter of protective nylon
    let paintPrice = 14.50; // price per liter of paint
    let thinnerPrice = 5.00; // price per liter of paint thinner
    let paintMarkup = 0.10; // 10% markup for paint
    let nylonMarkup = 2; // 2 additional square meters of nylon
    let bagPrice = 0.40; // price per bag
    
    // Read input
    let nylonAmount = Number(input[0]);
    let paintAmount = Number(input[1]);
    let thinnerAmount = Number(input[2]);
    let workHours = Number(input[3]);
    
    // Calculate cost of materials
    let nylonCost = (nylonAmount + nylonMarkup) * nylonPrice;
    let paintCost = (paintAmount * (1 + paintMarkup)) * paintPrice;
    let thinnerCost = thinnerAmount * thinnerPrice;
    let bagCost = bagPrice;
    let totalMaterialCost = nylonCost + paintCost + thinnerCost + bagCost;
    
    // Calculate cost of labor
    let laborCost = totalMaterialCost * 0.30 * workHours;
    
    // Calculate total cost
    let totalCost = totalMaterialCost + laborCost;
    
    // Output result
    console.log(totalCost);
  }
  
  repaint(["10 ", "11 ", "4 ", "8 "]);
  