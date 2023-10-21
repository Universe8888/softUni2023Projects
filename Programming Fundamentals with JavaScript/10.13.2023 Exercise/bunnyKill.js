function calculateBombDamage(input) {
    let matrixStrings = [];
    for (let i = 0; i < input.length - 1; i++) {
        matrixStrings.push(input[i]);
    }
    let bombCoordString = input[input.length - 1];

    let matrix = [];
    for (let i = 0; i < matrixStrings.length; i++) {
        let row = [];
        let rowStrings = matrixStrings[i].split(' ');
        for (let j = 0; j < rowStrings.length; j++) {
            row.push(Number(rowStrings[j]));
        }
        matrix.push(row);
    }
    let bombCoords = [];
    let coords = bombCoordString.split(' ');
    for (let i = 0; i < coords.length; i++) {
        let coordParts = coords[i].split(',');
        let x = Number(coordParts[0]);
        let y = Number(coordParts[1]);
        bombCoords.push([x, y]);
    }

    let totalDamage = 0;
    let bunniesKilled = 0;

    for (let k = 0; k < bombCoords.length; k++) {
        let x = bombCoords[k][0];
        let y = bombCoords[k][1];
        let damage = matrix[x][y];

        totalDamage += damage;
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

        bunniesKilled++;
    }

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

//gives 30/100 in Judge!