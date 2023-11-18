function matchPhoneNumber(input) {
    let phoneNumberPattern = /\+359[ -]2[ -]\d{3}[ -]\d{4}/g;
    let validNumbers = [];

    let text = input[0];

    let match;
    while ((match = phoneNumberPattern.exec(text)) !== null) {
        validNumbers.push(match[0]);
    }

    return validNumbers.join(', ');
}

let inputArray = ['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'];
console.log(matchPhoneNumber(inputArray));