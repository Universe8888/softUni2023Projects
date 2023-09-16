function displayNumbersAndSum(start, end) {
    let sum = 0;
    let output = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        output += i + " ";
    }

    console.log(output.trim());
    console.log("Sum:", sum);
}

displayNumbersAndSum(5, 10);

