function printSmallestNumber(numOne, numTwo, numThree) {
    let smallestNumber = numOne;

    if (numTwo < smallestNumber) {
        smallestNumber = numTwo;
    }

    if (numThree < smallestNumber) {
        smallestNumber = numThree;
    }

    console.log(smallestNumber);
}

printSmallestNumber(2, 5, 3);