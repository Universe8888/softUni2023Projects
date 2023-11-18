function processRaceInfo(input) {
    const participants = input[0].split(', ');
    const raceResults = {};

    for (let i = 1; i < input.length; i++) {
        if (input[i] === 'end of race') {
            break;
        }

        let name = input[i].match(/[A-Za-z]/g).join('');
        let distance = input[i].match(/\d/g).map(Number).reduce((a, b) => a + b, 0);

        if (participants.includes(name)) {
            if (!raceResults[name]) {
                raceResults[name] = 0;
            }
            raceResults[name] += distance;
        }
    }

    const sortedParticipants = Object.entries(raceResults)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    const places = ['1st place', '2nd place', '3rd place'];
    for (let i = 0; i < sortedParticipants.length; i++) {
        console.log(`${places[i]}: ${sortedParticipants[i][0]}`);
    }
}

const input = [
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
];
processRaceInfo(input);