function determineSign(numOne, numTwo, numThree) {
    if (numOne === 0 || numTwo === 0 || numThree === 0) {
        console.log("Non-negative");
        return;
    }

    let negativeCount = 0;
    if (numOne < 0) negativeCount++;
    if (numTwo < 0) negativeCount++;
    if (numThree < 0) negativeCount++;

    if (negativeCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

determineSign(5, 12, -15);
determineSign(-2, 3, 4);