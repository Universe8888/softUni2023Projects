function triBitSwitch(n, p) {

    console.log("Original: ", n.toString(2).padStart(32, '0'));

    let mask = 7 << p;

    let result = n ^ mask;

    console.log("Modified: ", result.toString(2).padStart(32, '0'));

    return result;


}

let result1 = triBitSwitch(1234, 7);
console.log("Result:", result1);
