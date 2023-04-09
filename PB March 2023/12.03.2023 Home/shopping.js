function shopping(input) {
    
    // Step 1: Extract input values from the array
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    // Step 2: Calculate the price of the video cards
    let videoCardsPrice = videoCards * 250;

    // Step 3: Calculate the discount based on the number of video cards and processors
    let discount = 1;
    if (videoCards > processors) {
        discount = 0.85;
    }

    // Step 4: Calculate the price of the processors
    let totalVideoCardsPrice = videoCardsPrice * discount;
    let processorsPrice = processors * totalVideoCardsPrice * 0.35;

    // Step 5: Calculate the price of the RAM
    let ramPrice = ram * totalVideoCardsPrice * 0.1;

    // Step 6: Calculate the total cost
    let totalCost = totalVideoCardsPrice + processorsPrice + ramPrice;

    // Step 7: Check if the budget is sufficient and print the result
    if (totalCost <= budget) {
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`);
    }
}

// Step 8: Call the function with sample input values
shopping(["900", "2", "1", "3"]);




