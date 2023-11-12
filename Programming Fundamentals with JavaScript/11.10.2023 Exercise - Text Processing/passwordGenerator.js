function generatePassword(input) {
    let [str1, str2, symbols] = input;

    let concatenatedStr = (str1 + str2).toLowerCase();

    let symbolIndex = 0;
    const vowels = 'aeiou';
    let replacedString = '';

    for (let char of concatenatedStr) {
        if (vowels.includes(char)) {
            replacedString += symbols[symbolIndex % symbols.length].toUpperCase();
            symbolIndex++;
        } else {
            replacedString += char;
        }
    }

    let reversedPassword = replacedString.split('').reverse().join('');

    return `Your generated password is ${reversedPassword}`;
}

const input = ['ilovepizza', 'ihatevegetables', 'orange'];
const output = generatePassword(input);
console.log(output);