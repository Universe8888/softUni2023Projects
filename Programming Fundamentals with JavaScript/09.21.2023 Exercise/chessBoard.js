function printChessboard(size) {
    let result = '<div class="chessboard">\n';
    
    for (let row = 0; row < size; row++) {
        result += ' <div>\n';
        for (let col = 0; col < size; col++) {
            let color = 'white';
            if ((row + col) % 2 === 0) {
                color = 'black';
            }
            result += `  <span class="${color}"></span>\n`;
        }
        result += ' </div>\n';
    }
    
    result += '</div>';
    return result;
}

// Example Usage:
let chessboard = printChessboard(5);
console.log(chessboard);