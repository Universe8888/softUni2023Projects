function calculateSum(input) {
    const charCodeA = 'A'.charCodeAt(0);
    const charCodea = 'a'.charCodeAt(0);
    const pattern = /([A-Za-z])(\d+)([A-Za-z])/g;
    let totalSum = 0;

    let match;
    while ((match = pattern.exec(input)) !== null) {
        let [_, firstLetter, number, secondLetter] = match;
        number = parseInt(number);

        totalSum += firstLetter === firstLetter.toUpperCase() 
            ? number / (firstLetter.charCodeAt(0) - charCodeA + 1)
            : number * (firstLetter.charCodeAt(0) - charCodea + 1);

        totalSum += secondLetter === secondLetter.toUpperCase()
            ? - (secondLetter.charCodeAt(0) - charCodeA + 1)
            : secondLetter.charCodeAt(0) - charCodea + 1;
    }

    return totalSum.toFixed(2);
}

const input = 'A12b s17G';
const output = calculateSum(input);
console.log(output);