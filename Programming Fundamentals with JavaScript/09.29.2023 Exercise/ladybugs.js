function ladybugFlight(input) {
    let fieldSize = Number(input[0]);
    let field = new Array(fieldSize).fill(0);

    let initialIndexes = input[1].split(' ').map(Number);

    
    for (let index of initialIndexes) {
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    
    for (let i = 2; i < input.length; i++) {
        let [startIndex, direction, flyLength] = input[i].split(' ');
        startIndex = Number(startIndex);
        flyLength = Number(flyLength);

        if (startIndex < 0 || startIndex >= fieldSize || field[startIndex] === 0) {
            continue;
        }

        field[startIndex] = 0;

        let position = startIndex;

        while (true) {
            if (direction === 'right') {
                position += flyLength;
            } else {
                position -= flyLength;
            }

            if (position < 0 || position >= fieldSize) {
                break;
            }

            if (field[position] === 0) {
                field[position] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}

ladybugFlight([3, '0 1', '0 right 1', '2 right 1']);