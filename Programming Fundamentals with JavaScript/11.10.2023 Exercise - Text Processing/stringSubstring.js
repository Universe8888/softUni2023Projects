function findWord(word, text) {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();

    if (lowerCaseText.includes(lowerCaseWord)) {
        console.log(lowerCaseWord);

        return
    } else {
        console.log(`${lowerCaseWord} not found!`);
    }
}

findWord('javascript', 'JavaScript is the best programming language');

// 80 / 100


// //function solve(word, text) {
//     const isFound = () => {
//         for (const currWord of text) {
//             if (word === currWord) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     word = word.toLowerCase();
//     text = text.toLowerCase().split(" ");


//     console.log(isFound() ? word : `${word} not found!`);
// }

//100/100 Tamer 

//Judge searches test cases so my method wont pass without a test.