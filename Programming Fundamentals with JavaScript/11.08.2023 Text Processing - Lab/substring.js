function sub(inputString, startIndex, length) {
    if (typeof inputString !== 'string') {
        console.error('First argument must be a string.');
        return;
    }
    if (typeof startIndex !== 'number' || startIndex < 0) {
        console.error('Second argument must be a non-negative number.');
        return;
    }
    if (typeof length !== 'number' || length < 0) {
        console.error('Third argument must be a non-negative number.');
        return;
    }

    let endIndex = startIndex + length;
    if (endIndex > inputString.length) {
        endIndex = inputString.length;
    }

    let result = inputString.substring(startIndex, endIndex);
    console.log(result);
}
sub('SkipWord', 4, 7);
