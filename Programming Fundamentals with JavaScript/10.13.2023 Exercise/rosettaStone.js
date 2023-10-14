function decodeMessage(input) {
    const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const templateLength = parseInt(input[0]);
    const template = input.slice(1, templateLength + 1).map(row => row.split(' ').map(Number));
    const message = input.slice(templateLength + 1).map(row => row.split(' ').map(Number));
    
    let decodedMessage = '';
    
    for (let row = 0; row < message.length; row++) {
        for (let col = 0; col < message[0].length; col++) {
            const templateRow = row % templateLength;
            const templateCol = col % template[0].length;
            const messageValue = message[row][col];
            const templateValue = template[templateRow][templateCol];
            const charIndex = (messageValue + templateValue) % 27;
            decodedMessage += alphabet[charIndex];
        }
    }
    
    decodedMessage = decodedMessage.trim();
    console.log(decodedMessage);
    
}

decodeMessage([ '2', '59 36', '82 52', '4 18 25 19 8', '4 2 8 2 18', '23 14 22 0 22', '2 17 13 19 20', '0 9 0 22 22' ]);