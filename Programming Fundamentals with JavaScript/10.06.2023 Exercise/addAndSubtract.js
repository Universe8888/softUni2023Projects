function addAndSubtract(numOne, numTwo, numThree) {

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    let sumResult = sum(numOne, numTwo);
    let finalResult = subtract(sumResult, numThree);

    console.log(finalResult);
}

addAndSubtract(23, 6, 10);

// Functions needed to be nested so that Judge can check them! All fixed!