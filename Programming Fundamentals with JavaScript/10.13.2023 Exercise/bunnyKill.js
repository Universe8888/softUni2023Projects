function calculateBombDamage(input) {
    
    function convertToMatrix(matrixStrings) {
        let matrix = [];
        for (let i = 0; i < matrixStrings.length; i++) {
            let row = [];
            let rowStrings = matrixStrings[i].split(' ');
            for (let j = 0; j < rowStrings.length; j++) {
                row.push(Number(rowStrings[j]));
            }
            matrix.push(row);
        }
        return matrix;
    }

    function extractBombCoordinates(bombCoordString) {
        let bombCoords = [];
        let coords = bombCoordString.split(' ');
        for (let i = 0; i < coords.length; i++) {
            let coordParts = coords[i].split(',');
            let x = Number(coordParts[0]);
            let y = Number(coordParts[1]);
            bombCoords.push([x, y]);
        }
        return bombCoords;
    }

    function applyBombDamage(matrix, x, y) {
        let damage = matrix[x][y];
        matrix[x][y] = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (x + i >= 0 && x + i < matrix.length && y + j >= 0 && y + j < matrix[0].length) {
                    matrix[x + i][y + j] = matrix[x + i][y + j] - damage;
                    if (matrix[x + i][y + j] < 0) {
                        matrix[x + i][y + j] = 0;
                    }
                }
            }
        }
        return damage;
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
        totalDamage += applyBombDamage(matrix, bombCoords[k][0], bombCoords[k][1]);
        bunniesKilled++;
    }

    let remaining = calculateRemaining(matrix);
    totalDamage += remaining.damage;
    bunniesKilled += remaining.count;

    console.log(totalDamage);
    console.log(bunniesKilled);
}

calculateBombDamage(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1']);


//gives 30/100 in Judge!