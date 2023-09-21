function printTriples(n) {
    // Convert the input string to a number
    n = parseInt(n, 10);

    // Define the first 'n' small Latin letters
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.substring(0, n);

    // Generate and print triples of the first 'n' small Latin letters
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            for (let k = 0; k < alphabet.length; k++) {
                console.log(alphabet[i] + alphabet[j] + alphabet[k]);
            }
        }
    }
}

// Test the function with input '3'
printTriples('3');
