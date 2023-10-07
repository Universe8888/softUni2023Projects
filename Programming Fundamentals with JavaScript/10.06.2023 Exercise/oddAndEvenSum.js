function sumEvenOddDigits(number) {
    const digits = String(number);

    let evenSum = 0;
    let oddSum = 0;

    for (const digitStr of digits) {
        const digit = parseInt(digitStr, 10);

        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}

sumEvenOddDigits(1000435);