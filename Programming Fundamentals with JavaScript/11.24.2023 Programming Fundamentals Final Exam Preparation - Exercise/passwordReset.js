// // Problem 1 - Password Reset
// // The problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// // Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2303#0.

// // Yet again, you have forgotten your password. Naturally, it's not the first time this has happened. Actually, you got so tired of it that you decided to help yourself with an intelligent solution.
// // Write a password reset program that performs a series of commands upon a predefined string. First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space. The commands will be the following:
// // "TakeOdd"
// //  Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
// // "Cut {index} {length}"
// // Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// // The given index and the length will always be valid.
// // "Substitute {substring} {substitute}"
// // If the raw password contains the given substring, replace all of its occurrences with the substitute text given and print the result.
// // If it doesn't, prints "Nothing to replace!".
// // Input
// // You will be receiving strings until the "Done" command is given.
// // Output
// // After the "Done" command is received, print:
// // "Your password is: {password}"
// // Constraints
// // The indexes from the "Cut {index} {length}" command will always be valid.

// function solve(input) {

//     let str = input.shift();
//     let raw = '';

//     for (let el of input) {
//         if (el === 'Done') break;

//         if (el === 'TakeOdd') {
//             for (let i = 0; i < str.length; i++) {
//                 if (i % 2 !== 0) {
//                     raw += str[i];
//                 }
//             }
//             console.log(raw);

//         } else if (el.includes('Cut')) {
//             let [, idx, length] = el.split(' ');
//             raw = raw.slice(0, Number(idx)) + raw.slice(Number(idx) + Number(length));
//             console.log(raw);

//         } else if (el.includes('Substitute')) {
//             let [, substring, substitute] = el.split(' ');
//             if (raw.includes(substring)) {
//                 raw = raw.split(substring).join(substitute);
//                 console.log(raw);
//             } else {
//                 console.log("Nothing to replace!");
//             }
//         }
//     }
//     console.log(`Your password is: ${raw}`);

// }
// solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"])
// // solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
// // "TakeOdd",
// // "Cut 18 2",
// // "Substitute ! ***",
// // "Substitute ? .!.",
// // "Done"])

//50/100 by Shaker

function solve(input) {
    let password = input.shift();

    for (let el of input) {
        if (el === 'Done') break;

        if (el === 'TakeOdd') {
            let newPassword = '';
            for (let i = 0; i < password.length; i++) {
                if (i % 2 !== 0) {
                    newPassword += password[i];
                }
            }
            password = newPassword;
            console.log(password);
        } 
        else if (el.includes('Cut')) {
            let [, idx, length] = el.split(' ');
            idx = Number(idx);
            length = Number(length);
            let substringToRemove = password.substring(idx, idx + length);
            password = password.replace(substringToRemove, '');
            console.log(password);
        } 
        else if (el.includes('Substitute')) {
            let [, substring, substitute] = el.split(' ');
            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${password}`);
}

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);

//100 /100