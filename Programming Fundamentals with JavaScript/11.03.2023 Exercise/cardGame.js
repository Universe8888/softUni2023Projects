function calculateCardValues(inputArray) {
    const playerCards = {};

    inputArray.forEach(string => {
        const [name, cardsString] = string.split(': ');
        const cards = cardsString.split(', ');

        if (!playerCards.hasOwnProperty(name)) {
            playerCards[name] = {};
        }

        cards.forEach(card => {
            playerCards[name][card] = true;
        });
    });

    const cardValue = card => {
        const power = card.length === 3 ? card.slice(0, 2) : card.slice(0, 1);
        const type = card.slice(-1);
        const powerValue = power >= '2' && power <= '10' ? parseInt(power) : (power === 'J' ? 11 : (power === 'Q' ? 12 : (power === 'K' ? 13 : 14)));
        const typeMultiplier = type === 'S' ? 4 : (type === 'H' ? 3 : (type === 'D' ? 2 : 1));
        return powerValue * typeMultiplier;
    };

    for (const name in playerCards) {
        const totalValue = Object.keys(playerCards[name]).reduce((sum, card) => sum + cardValue(card), 0);
        console.log(`${name}: ${totalValue}`);
    }
}

const inputArray = [
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
];
calculateCardValues(inputArray);

// 20 / 100 in Judge