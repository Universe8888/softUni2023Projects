function decryptMessages(input) {
    const messageCount = parseInt(input[0], 10);
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 1; i <= messageCount; i++) {
        const message = input[i];
        const key = (message.match(/[starSTAR]/g) || []).length;
        let decryptedMessage = '';

        for (let char of message) {
            decryptedMessage += String.fromCharCode(char.charCodeAt(0) - key);
        }

        const planetRegex = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attack>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
        const match = planetRegex.exec(decryptedMessage);

        if (match) {
            const { planet, attack } = match.groups;
            if (attack === 'A') {
                attackedPlanets.push(planet);
            } else {
                destroyedPlanets.push(planet);
            }
        }
    }

    attackedPlanets.sort();
    destroyedPlanets.sort();

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
}

const input = [
    '2', 
    'STCDoghudd4=63333$D$0A53333', 
    'EHfsytsnhf?8555&I&2C9555SR'
];
decryptMessages(input);