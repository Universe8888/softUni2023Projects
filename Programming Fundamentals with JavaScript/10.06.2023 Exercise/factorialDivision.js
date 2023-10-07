function divideFactorials(numOne, numTwo) {
  
    function factorial(n) {
        if (n === 0) {
            return 1;
        } 
        return n * factorial(n - 1);
    }

    let factorialOne = factorial(numOne);
    let factorialTwo = factorial(numTwo);

    let result = factorialOne / factorialTwo;

    console.log(result.toFixed(2));
}


divideFactorials(5, 2);


//functions needed to be nested for Judge to check them! That was the issue!