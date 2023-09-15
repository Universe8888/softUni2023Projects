function sumOfOddNumbers(n) {
    let sum = 0;

    for (let i = 1, odd = 1; i <= n; i++, odd += 2) {
        console.log(odd);
        sum += odd;
    }

    console.log("Sum: " + sum);
}

sumOfOddNumbers(100)