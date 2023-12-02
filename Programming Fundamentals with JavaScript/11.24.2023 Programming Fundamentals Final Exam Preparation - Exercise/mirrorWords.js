function findMirrorWords(text) {
    const regex = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let match;
    const mirrorPairs = [];

    let pairCount = 0;
    while ((match = regex.exec(text)) !== null) {
        pairCount++;
        const [wordOne, wordTwo] = [match[2], match[3]];
        const reversedWordTwo = wordTwo.split('').reverse().join('');

        if (wordOne === reversedWordTwo) {
            mirrorPairs.push(`${wordOne} <=> ${wordTwo}`);
        }
    }

    if (pairCount === 0) {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    } else {
        console.log(`${pairCount} word pairs found!`);
        if (mirrorPairs.length === 0) {
            console.log("No mirror words!");
        } else {
            console.log(`The mirror words are:\n${mirrorPairs.join(", ")}`);
        }
    }
}

findMirrorWords('#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#');