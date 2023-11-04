function calculateCardValues(input) {
    const players = {};

    function parseCard(card) {
        const valueMap = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
        const typeMultiplier = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };

        const power = card.slice(0, -1);
        const type = card.slice(-1);

        const value = isNaN(power) ? valueMap[power] : parseInt(power);
        return value * typeMultiplier[type];
    }

    function processInput(line) {
        const [player, cards] = line.split(': ');
        if (!players[player]) players[player] = new Set();

        cards.split(', ').forEach(card => {
            players[player].add(card);
        });
    }

    function calculateScore(cards) {
        let score = 0;
        cards.forEach(card => {
            score += parseCard(card);
        });
        return score;
    }

    input.forEach(processInput);

    for (const [player, cards] of Object.entries(players)) {
        console.log(`${player}: ${calculateScore(cards)}`);
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

//nested func