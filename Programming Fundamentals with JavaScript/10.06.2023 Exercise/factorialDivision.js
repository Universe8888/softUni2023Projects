function factorial(n) {
    if (n === 1) {
        return 1;
    } 
    
    return n * factorial(n - 1);
}

function divideFactorials(numOne, numTwo) {

    let factorialOne = factorial(numOne);
    let factorialTwo = factorial(numTwo);

    let result = factorialOne / factorialTwo;

    console.log(result.toFixed(2));
}

divideFactorials(5, 2);