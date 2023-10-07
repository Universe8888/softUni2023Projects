function printCharactersBetween(char1, char2) {
    let startChar = char1.charCodeAt(0);
    let endChar = char2.charCodeAt(0);

    if(startChar > endChar) {
        [startChar, endChar] = [endChar, startChar];
    }

    let charactersBetween = [];
    for(let i = startChar + 1; i < endChar; i++) {
        charactersBetween.push(String.fromCharCode(i));
    }

    console.log(charactersBetween.join(' '));
}

printCharactersBetween('a', 'd');