// Create a program, that checks if inputs are a valid password and encrypt it. On the first line you will receive a number that indicates how many inputs you will receive on the next lines.

// A password is valid when:

// 1. It starts with a group of symbols and ends with the same symbols (the same length) - All symbols are possible.
// 2. There is a greater than sign (">") after the first group and a less than sign ("<") before the last one.
// 3. In between the greater than sign and the less than sign there are four groups (each of three characters), separated by pipe ("|").
// 4. The first group consists only of numbers.
// 5. The second group – only lower case letters.
// 6. The third one – only upper case letters.
// 7. The fourth one – all symbols except "<" and ">".

// Example for a valid message:

// "$$$>312|dfe|KFE|@!#<$$$"

// You must check if the password is valid and if it is - encrypt it, if it isn't - print the following message:

// "Try another password!"

// Encrypting a password means to take all numbers, letters and symbols from the middle four groups and concatenate them. After successful encrypt, print it in the following format:

// "Password: {encrypted password}"

// Input

//  On the first line - n - the count of inputs.
//  On the next n lines - input that you have to check if it has a valid password.

// Output

//  Print all results from each input, each on a new line.

//This text and code is only for testing purposes
// Copyright to SoftUni




// function encryptPasswords(inputs) {
//     function isValidPassword(password) {
//         const passwordPattern = /^(.+)>(([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3}))<\1$/;
//         return passwordPattern.test(password);
//     }

//     function encryptPassword(password) {
//         const encrypted = password.match(/>(.+)</)[1].replace(/\|/g, '');
//         return `Password: ${encrypted}`;
//     }

//     const inputCount = parseInt(inputs[0], 10);
//     for (let i = 1; i <= inputCount; i++) {
//         const password = inputs[i];
//         if (isValidPassword(password)) {
//             console.log(encryptPassword(password));
//         } else {
//             console.log("Try another password!");
//         }
//     }
// }

// encryptPasswords([
//     "5",
//     "aa>111|mqu|BAU|mqu<aa",
//     "()>111|aaa|AAA|^&*<()",
//     "o>088|abc|AAA|***<o",
//     "asd>asd|asd|ASD|asd<asd",
//     "*>088|zzzz|ZzZ|123<*"
// ]);

// console.log('-------------------');

// encryptPasswords([
//     "3",
//     "##>00|no|NO|!!!?<###",
//     "##>123|yes|YES|!!!<##",
//     "$$<111|noo|NOPE|<<>$$"
// ]);

// 80 / 100 in Judge

//solution 2


function solve(input) {
    const inputCount = Number(input[0]);

    for (let i = 1; i <= inputCount; i++) {
        const password = input[i];
        const firstGreaterIndex = password.indexOf('>');
        const lastLessIndex = password.lastIndexOf('<');

        if (firstGreaterIndex === -1 || lastLessIndex === -1 || firstGreaterIndex >= lastLessIndex) {
            console.log("Try another password!");
            continue;
        }

        const startSymbols = password.substring(0, firstGreaterIndex);
        const endSymbols = password.substring(lastLessIndex + 1);

        if (startSymbols !== endSymbols) {
            console.log("Try another password!");
            continue;
        }

        const middlePart = password.substring(firstGreaterIndex + 1, lastLessIndex).split('|');
        if (middlePart.length === 4 &&
            /^\d{3}$/.test(middlePart[0]) && 
            /^[a-z]{3}$/.test(middlePart[1]) && 
            /^[A-Z]{3}$/.test(middlePart[2]) && 
            /^[^\s<>]{3}$/.test(middlePart[3])) {
            const encryptedPassword = middlePart.join('');
            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log("Try another password!");
        }
    }
}

solve([
    "5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111|aaa|AAA|^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"
]);

console.log('-------------------');

solve([
    "3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"
]);


//80 / 100 in Judge again :D