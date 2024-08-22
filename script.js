function createChessboard(size) {
    let chessboard = '';
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                chessboard += ' ';
            } else {
                chessboard += '#';
            }
        }
        chessboard += '\n'; // Add newline character after each row
    }
    return chessboard;
}

const size = 8; // Change this value to adjust the size of the chessboard
console.log(createChessboard(size));
