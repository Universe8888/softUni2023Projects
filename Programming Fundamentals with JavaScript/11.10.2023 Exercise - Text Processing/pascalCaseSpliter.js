function splitPascalCase(input) {
    const result = input.replace(/([A-Z])/g, ', $1').trim();
    return result.charAt(0) === ',' ? result.slice(2) : result;
}

const output = splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log(output);