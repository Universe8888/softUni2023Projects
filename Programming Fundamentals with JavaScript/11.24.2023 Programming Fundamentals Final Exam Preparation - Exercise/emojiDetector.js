function emojiDetector([input]) {
    let coolThreshold = 1;
    let emojiRegex = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    let coolEmojis = [];

    (input.match(/\d/g) || []).forEach(digit => coolThreshold *= Number(digit));
    console.log(`Cool threshold: ${coolThreshold}`);

    let foundEmojis = input.match(emojiRegex) || [];
    console.log(`${foundEmojis.length} emojis found in the text. The cool ones are:`);

    foundEmojis.forEach(emoji => {
        let emojiText = emoji.slice(2, -2);
        let coolness = emojiText.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

        if (coolness > coolThreshold) {
            coolEmojis.push(emoji);
        }
    });

    coolEmojis.forEach(emoji => console.log(emoji));
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
