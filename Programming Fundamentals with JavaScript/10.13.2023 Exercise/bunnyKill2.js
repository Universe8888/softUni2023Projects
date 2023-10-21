function calculateBombDamage(input) {
    // Convert matrix strings to matrix of numbers
    let matrixStrings = input.slice(0, -1);
    let matrix = matrixStrings.map(rowString => {
        return rowString.split(' ').map(Number);
    });

    // Extract bomb coordinates from the input string
    let bombCoordString = input[input.length - 1];
    let bombCoords = bombCoordString.split(' ').map(coord => {
        let coordParts = coord.split(',');
        return [Number(coordParts[0]), Number(coordParts[1])];
    });

    let totalDamage = 0;
    let bunniesKilled = 0;

    // Process each bomb
    for (let k = 0; k < bombCoords.length; k++) {
        let x = bombCoords[k][0];
        let y = bombCoords[k][1];
        let damage = matrix[x][y];

        if (damage !== 0) {
            bunniesKilled++;
        }
        
        totalDamage += damage;
        matrix[x][y] = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (x + i >= 0 && x + i < matrix.length && y + j >= 0 && y + j < matrix[0].length) {
                    matrix[x + i][y + j] = Math.max(0, matrix[x + i][y + j] - damage);
                }
            }
        }
    }

    // Calculate remaining damage and count of bunnies
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) {
                totalDamage += matrix[i][j];
                bunniesKilled++;
            }
        }
    }

    console.log(totalDamage);
    console.log(bunniesKilled);
}

calculateBombDamage(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1']);