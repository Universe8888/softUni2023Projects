function combinations(input) {
    let n = Number(input[0]);
    let validCombinationsCount = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                if (x1 + x2 + x3 === n) {
                    validCombinationsCount++;
                }
            }
        }
    }
    console.log(validCombinationsCount);
}

combinations(["25"]);







//Chat GPT pahahhah

// function combinations(input) {
//     const n = parseInt(input[0], 10);
//     const totalBoxes = 3;
    
//     // Calculate the number of ways using n - 1 "bars" to divide n "stars" into totalBoxes groups
//     const ways = factorial(n + totalBoxes - 1) / (factorial(totalBoxes - 1) * factorial(n));
//     console.log(ways);
// }

// // Helper function to calculate the factorial of a number
// function factorial(num) {
//     if (num === 0) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// combinations(["25"]);
