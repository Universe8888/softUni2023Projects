function houseParty(inputArr) {
    const guests = new Set();

    for (const instruction of inputArr) {
        const [name, action] = instruction.split(' is ');
        const isGoing = action.trim() === 'going!';
        
        if (isGoing) {
            if (guests.has(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.add(name);
            }
        } else {
            if (!guests.has(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                guests.delete(name);
            }
        }
    }

    console.log(Array.from(guests).join('\n'));
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);