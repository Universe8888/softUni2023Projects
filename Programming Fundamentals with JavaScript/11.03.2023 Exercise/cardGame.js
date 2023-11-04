function calculateCardValues(input) {
    const players = {};
    const cardValues = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    const typeMultiplier = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };

    input.forEach(line => {
        const [player, cards] = line.split(': ');
        if (!players[player]) players[player] = new Set();

        cards.split(', ').forEach(card => {
            players[player].add(card);
        });
    });

    for (const [player, cards] of Object.entries(players)) {
        let score = 0;
        cards.forEach(card => {
            const type = card.slice(-1);
            const power = card.slice(0, -1);
            score += cardValues[power] * typeMultiplier[type];
        });
        console.log(`${player}: ${score}`);
    }
}

calculateCardValues([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Thomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Thomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);

// calculateCardValues([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
// ]);