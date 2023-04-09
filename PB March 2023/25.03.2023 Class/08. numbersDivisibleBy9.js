function numbersDivisibleBy9 (input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let sum = 0;
    let results = [];

    for (let i = n1; i <= n2; i++) {
        if (i % 9 === 0) {
            sum += i;
            results.push(i);
        }
    }

    console.log(`The sum: ${sum}`);
    for (let j = 0; j < results.length; j++) {
        console.log(results[j]);
    }
}

numbersDivisibleBy9(["100", "200"]);
