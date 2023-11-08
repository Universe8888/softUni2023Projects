function solve(text, word) {
    function repeat(word) {
        return '*'.repeat(word.length);
    }

    let censored = text.replace(new RegExp(word, 'g'), repeat(word));

    return censored;
}

console.log(solve('A small sentence with some words', 'small'));
// console.log(solve('Find the hidden word', 'hidden'));