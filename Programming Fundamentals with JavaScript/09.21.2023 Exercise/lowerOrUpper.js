function printCase(character) {
    
    if (character === character.toUpperCase() && character !== character.toLowerCase()) {
        console.log('upper-case');
    } else if (character === character.toLowerCase() && character !== character.toUpperCase()) {
        console.log('lower-case');
    } else {
        console.log('The input is not a valid alphabetic character');
    }
}

printCase('L');