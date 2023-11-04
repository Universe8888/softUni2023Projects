function oddOccurrences(sentence) {
    let words = sentence.toLowerCase().split(' ');
    let wordCounts = {};
    let uniqueWords = [];

    for (let word of words) {
        if (!wordCounts[word]) {
            uniqueWords.push(word);
        }
        wordCounts[word] = wordCounts[word] ? wordCounts[word] + 1 : 1;
    }

    let result = uniqueWords.filter(word => wordCounts[word] % 2 !== 0);

    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');