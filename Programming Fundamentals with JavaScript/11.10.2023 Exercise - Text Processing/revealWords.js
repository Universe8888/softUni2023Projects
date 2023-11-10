function revealWords(words, template) {
    words.split(', ').forEach(word => {
        template = template.replace('*'.repeat(word.length), word);
    });
    return template;
}
const result1 = revealWords('great', 'softuni is ***** place for learning new programming languages');
console.log(result1);

// const result2 = revealWords('great, learning', 'softuni is ***** place for ********* new programming languages');
// console.log(result2);