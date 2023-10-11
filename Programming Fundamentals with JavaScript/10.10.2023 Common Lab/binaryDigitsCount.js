function countBinaryDigit(n, b) {
    let binaryRepresentation = n.toString(2);

    let count = 0;
    for(let digit of binaryRepresentation) {

        if(digit == b.toString()) {
            count++
        }
    }

    console.log(`Binary representation of ${n} is ${binaryRepresentation}`);
    console.log(`Digit ${b} appears ${count} times in it.`);

}
// countBinaryDigit(20, 0);
countBinaryDigit(15, 1);