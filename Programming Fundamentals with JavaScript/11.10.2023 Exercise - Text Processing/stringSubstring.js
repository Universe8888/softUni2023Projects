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