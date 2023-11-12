function findWord(word, text) {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();

    if (lowerCaseText.includes(lowerCaseWord)) {
        console.log(word);

        return
    } else {
        console.log(`${word} not found!`);
    }
}

findWord('javascript', 'JavaScript is the best programming language');

// 80 / 100