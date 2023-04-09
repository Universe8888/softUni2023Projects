function cake(input) {
    let width = parseInt(input[0]);
    let length = parseInt(input[1]);
    let totalPieces = width * length;
    let piecesTaken = 0;
    let i = 2;

    while (input[i] !== "STOP" && piecesTaken < totalPieces) {
        let currentTake = parseInt(input[i]);
        piecesTaken += currentTake;
        i++;
    }
    
    if (piecesTaken < totalPieces) {
        console.log(`${totalPieces - piecesTaken} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${piecesTaken - totalPieces} pieces more.`);
    }
    
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);
