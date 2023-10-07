function addAndSubtract(numOne, numTwo, numThree) {
    let sumResult = sum(numOne, numTwo);
    let finalResult = subtract(sumResult, numThree);
    console.log(finalResult);
}

function sum(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

addAndSubtract(23, 6, 10);


// Judge is giving an error no matter how this is solved!