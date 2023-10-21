function calculateBombDamage(input) {
    
    function convertToMatrix(matrixStrings) {
        return matrixStrings.map(rowString => {
            return rowString.split(' ').map(Number);
        });
    }

    function extractBombCoordinates(bombCoordString) {
        return bombCoordString.split(' ').map(coord => {
            let coordParts = coord.split(',');
            return [Number(coordParts[0]), Number(coordParts[1])];
        });
    }

    function applyBombDamage(matrix, x, y) {
        let damage = matrix[x][y];
        if (damage === 0) {
            return { damage: 0, killed: false };
        }
        matrix[x][y] = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (x + i >= 0 && x + i < matrix.length && y + j >= 0 && y + j < matrix[0].length) {
                    matrix[x + i][y + j] = Math.max(0, matrix[x + i][y + j] - damage);
                }
            }
        }
        return { damage, killed: true };
    }

    function calculateRemaining(matrix) {
        let damage = 0;
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] > 0) {
                    damage += matrix[i][j];
                    count++;
                }
            }
        }
        return { damage, count };
    }

    let matrixStrings = input.slice(0, -1);
    let matrix = convertToMatrix(matrixStrings);
    
    let bombCoordString = input[input.length - 1];
    let bombCoords = extractBombCoordinates(bombCoordString);

    let totalDamage = 0;
    let bunniesKilled = 0;

    for (let k = 0; k < bombCoords.length; k++) {
        let bombResult = applyBombDamage(matrix, bombCoords[k][0], bombCoords[k][1]);
        totalDamage += bombResult.damage;
        if (bombResult.killed) {
            bunniesKilled++;
        }
    }

    let remaining = calculateRemaining(matrix);
    totalDamage += remaining.damage;
    bunniesKilled += remaining.count;

    console.log(totalDamage);
    console.log(bunniesKilled);
}

calculateBombDamage(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1']);

//gives 100/100 in Judge now!