function sumOfTwoNumbers(input) {
    let startOfInt = Number(input[0]);
    let endOfInt = Number(input[1]);
    let magicNum = Number(input[2]);

    let counter = 0;
    let found = false;

    for (let i = startOfInt; i <= endOfInt; i++) {
        for (let j = startOfInt; j <= endOfInt; j++) {
            counter++;
            if (i + j === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }

    if (!found) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);
