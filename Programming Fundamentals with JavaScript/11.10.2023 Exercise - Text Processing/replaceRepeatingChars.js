function replaceRepeatedChars(str) {
    return str.replace(/(.)\1+/g, '$1');
}
let result = replaceRepeatedChars('aaaaabbbbbcdddeeeedssaa');
console.log(result);