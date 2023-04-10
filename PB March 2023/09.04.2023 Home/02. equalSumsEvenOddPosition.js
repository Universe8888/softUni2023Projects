function evenOddSumEqualNumbers(input) {
    const start = Number(input[0]);
    const end = Number(input[1]);
    let output = "";

    for (let num = start; num <= end; num++) {
        let numString = num.toString();
        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < numString.length; i++) {
            if (i % 2 === 0) {
                evenSum += Number(numString[i]);
            } else {
                oddSum += Number(numString[i]);
            }
        }

        if (evenSum === oddSum) {
            output += num + " ";
        }
    }

    if (output !== "") {
        console.log(output.trim());
    }
}

evenOddSumEqualNumbers(["100000", "100050"]);
