function decrypt(input) {
    let message = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i] === 'Reveal') break;

        const [command, arg1, arg2] = input[i].split(':|:');

        switch (command) {
            case 'InsertSpace':
                const index = Number(arg1);
                message = message.slice(0, index) + ' ' + message.slice(index);
                break;
            case 'Reverse':
                const substring = arg1;
                const subIndex = message.indexOf(substring);
                if (subIndex !== -1) {
                    message = message.slice(0, subIndex) + message.slice(subIndex + substring.length) + substring.split('').reverse().join('');
                } else {
                    console.log('error');
                    continue;
                }
                break;
            case 'ChangeAll':
                message = message.split(arg1).join(arg2);
                break;
        }
        console.log(message);
    }

    return `You have a new text message: ${message}`;
}

const input = [
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
];
console.log(decrypt(input));