function wordsTracker(inputArray) {
    let wordsToFind = inputArray.shift().split(' ');
    let wordCounts = {};

    for (let word of wordsToFind) {
        wordCounts[word] = 0;
    }

    for (let word of inputArray) {
        if (word in wordCounts) {
            wordCounts[word]++;
        }
    }

    let entries = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of entries) {
            console.log(`${word} - ${count}`);
    }
}

wordsTracker([
  'this sentence',
  'In', 'this', 'sentence', 'you', 'have',
  'to', 'count', 'the', 'occurrences', 'of',
  'the', 'words', 'this', 'and', 'sentence',
  'because', 'this', 'is', 'your', 'task'
]);

// wordsTracker([
//   'is the',
//   'first', 'sentence', 'Here', 'is',
//   'another', 'the', 'And', 'finally', 'the',
//   'the', 'sentence'
// ]);