//Create a program that manipulates a string and makes it suitable for a password.

// Password rules are:

// 1. Must be at least 8 characters long.
// 2. Consists only of letters, digits, and underscore "_".
// 3. Must have at least one uppercase letter.
// 4. Must have at least one lowercase letter.
// 5. Must have at least one digit.

// First, you are going to receive the password that the user wants to use.

// Next, you will be receiving commands until you receive the "Complete" command. There are five possible commands:

// 1. "Make Upper {index}"
//   a. Replace the letter at the given index with upper case, then print the password.
// 2. "Make Lower {index}"
//   b. Replace the letter at the given index with lower case, then print the password.
// 3. "Insert {index} {char}"
//   a. Inserts the given char at the given index in the string, then print the password.
//   b. If the index is not valid, ignore the command.
// 4. "Replace {char} {value}"
//   a. Get the ASCII value of the given char. Sum its value with the given value and replace all occurrences of the char with the new symbol corresponding to the sum result in the ASCII table. Print the password.
//   b. If the char is not in the password, ignore the command.
// 5. "Validation"
//   a. Check why the password is not valid. Each of the checks should be performed in the order shown and are independent of each other:
//     1a. If it is not at least 8 characters, print: "Password must be at least 8 characters long!"
//     2a. If it does not consist only of letters, digits and underscore, print: "Password must consist only of letters, digits and _!"
//     3a. If it does not have at least one uppercase letter, print: "Password must consist at least one uppercase letter!"
//     4a. If it does not have at least one lowercase letter, print: "Password must consist at least one lowercase letter!"
//     5a. If it does not have at least one digit, print: "Password must consist at least one digit!"

// If a given command is not valid, you should ignore it.

//Input

//  On the 1st line, you are going to receive the password in the form of a string.
//  On the next lines, until you receive the "Complete" command, you will be receiving commands.

// Output

//  Print the output of every command in the format described above.

//This text and code is only for testing purposes
// Copyright to SoftUni



function passValidator(commands) {
    let password = commands[0];

    function makeCase(index, caseType) {
        if (index < 0 || index >= password.length) return password;
        let char = password[index];
        char = (caseType === 'Upper') ? char.toUpperCase() : char.toLowerCase();
        return password.substr(0, index) + char + password.substr(index + 1);
    }

    function insertChar(index, char) {
        if (index < 0 || index > password.length) return password;
        return password.substr(0, index) + char + password.substr(index);
    }

    function replaceChar(oldChar, value) {
        if (!password.includes(oldChar)) return password;
        const newCharCode = (oldChar.charCodeAt(0) + value) % 256;
        const newChar = String.fromCharCode(newCharCode);
        const escapedChar = oldChar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return password.replace(new RegExp(escapedChar, 'g'), newChar);
    }    

    function validatePassword() {
        const messages = [];
        if (password.length < 8) messages.push("Password must be at least 8 characters long!");
        if (!/^[a-zA-Z0-9_]+$/.test(password)) messages.push("Password must consist only of letters, digits and _!");
        if (!/[A-Z]/.test(password)) messages.push("Password must consist at least one uppercase letter!");
        if (!/[a-z]/.test(password)) messages.push("Password must consist at least one lowercase letter!");
        if (!/[0-9]/.test(password)) messages.push("Password must consist at least one digit!");
        return messages.join('\n');
    }

    for (let i = 1; i < commands.length; i++) {
        const commandParts = commands[i].split(' ');
        const command = commandParts[0];

        switch (command) {
            case 'Make':
                password = makeCase(parseInt(commandParts[2]), commandParts[1]);
                console.log(password);
                break;
            case 'Insert':
                password = insertChar(parseInt(commandParts[1]), commandParts[2]);
                console.log(password);
                break;
            case 'Replace':
                password = replaceChar(commandParts[1], parseInt(commandParts[2]));
                console.log(password);
                break;
            case 'Validation':
                console.log(validatePassword());
                break;
            case 'Complete':
                return;
        }
    }
}

passValidator([
    "invalidpassword*",
    "Add 2 p",
    "Replace i -50",
    "Replace * 10",
    "Make Upper 2",
    "Validation",
    "Complete"
]);

console.log('-----------------');

passValidator(['123456789',

'Insert 3 R',

'Replace 5 15',

'Validation',

'Make Lower 3',

'Complete']);

//100 / 100 in Judge

//Had an issue here: if (!/^[a-zA-Z0-9_]+$/.test(password)) messages.push("Password must consist only of letters, digits and _!");
