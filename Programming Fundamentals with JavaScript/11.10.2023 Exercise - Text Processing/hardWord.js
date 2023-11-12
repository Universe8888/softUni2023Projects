function fillInTheBlanks(input) {
    let [letter, words] = input;
    const underscorePattern = /_+/g;

    letter = letter.replace(underscorePattern, (match) => {
        let word = words.find(w => w.length === match.length);
        words = words.filter(w => w !== word);
        return word;
    });

    return letter;
}

const input = [
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
];

const output = fillInTheBlanks(input);
console.log(output);