function manageCards(commands) {
    const deckInput = commands[0];
    const numOfCommands = parseInt(commands[1], 10);
    let deck = deckInput.split(", ");
    const output = [];

    function cardExists(cardName) {
        return deck.includes(cardName);
    }

    function handleAdd(cardName) {
        if (cardExists(cardName)) {
            output.push("Card is already in the deck");
        } else {
            deck.push(cardName);
            output.push("Card successfully added");
        }
    }

    function handleRemove(cardName) {
        if (cardExists(cardName)) {
            deck = deck.filter(card => card !== cardName);
            output.push("Card successfully removed");
        } else {
            output.push("Card not found");
        }
    }

    function handleInsert(position, cardName) {
        const pos = parseInt(position, 10);
        if (pos >= 0 && pos < deck.length) {
            if (cardExists(cardName)) {
                output.push("Card is already added");
            } else {
                deck.splice(pos, 0, cardName);
                output.push("Card successfully added");
            }
        } else {
            output.push("Index out of range");
        }
    }

    function handleRemoveAt(index) {
        const idx = parseInt(index, 10);
        if (idx >= 0 && idx < deck.length) {
            deck.splice(idx, 1);
            output.push("Card successfully removed");
        } else {
            output.push("Index out of range");
        }
    }

    for (let i = 2; i < 2 + numOfCommands; i++) {
        const [command, param1, param2] = commands[i].split(", ");
        switch (command) {
            case "Add":
                handleAdd(param1);
                break;
            case "Remove":
                handleRemove(param1);
                break;
            case "Insert":
                handleInsert(param1, param2);
                break;
            case "Remove At":
                handleRemoveAt(param1);
                break;
            default:
                break;
        }
    }

    output.push(deck.join(", "));
    return output.join('\n');
}

const example1 = ["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"];
console.log(manageCards(example1));