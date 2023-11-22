function decryptMessage(input) {
    let message = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i] === 'Decode') break;

        const [command, arg1, arg2] = input[i].split('|');

        switch (command) {
            case 'Move':
                const moveCount = Number(arg1);
                message = message.substring(moveCount) + message.substring(0, moveCount);
                break;
            case 'Insert':
                const index = Number(arg1);
                message = message.slice(0, index) + arg2 + message.slice(index);
                break;
            case 'ChangeAll':
                const substring = arg1;
                const replacement = arg2;
                message = message.split(substring).join(replacement);
                break;
        }
    }

    return `The decrypted message is: ${message}`;
}

const input = ['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'];
console.log(decryptMessage(input));