function pigers(inpute) {

    let foodForOneMonth = parseFloat(inpute[0]) * 1000; 
    let hayForOneMonth = parseFloat(inpute[1]) * 1000;
    let coverForOneMonth = parseFloat(inpute[2]) * 1000;
    let pigWeight = parseFloat(inpute[3]) * 1000;

    for (let day = 1; day <= 30; day++) {
        
        foodForOneMonth -= 300;

    
        if (day % 2 === 0) {
            hayForOneMonth -= 0.05 * foodForOneMonth;
        }

        
        if (day % 3 === 0) {
            coverForOneMonth -= pigWeight / 3;
        }

        
        if (foodForOneMonth < 0 || hayForOneMonth < 0 || coverForOneMonth < 0) {
            console.log("Merry must go to the pet store!");
            return; 
        }
    }

    
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodForOneMonth / 1000).toFixed(2)}, Hay: ${(hayForOneMonth / 1000).toFixed(2)}, Cover: ${(coverForOneMonth / 1000).toFixed(2)}.`);
}

pigers(["10", "5", "5.2", "1"]);