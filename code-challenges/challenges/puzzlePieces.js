
const puzzlePieces = (puzzlePiece1, puzzlePiece2) => {
    if (puzzlePiece1.length !== puzzlePiece2.length) {
        return false;
    }
    let priorSum = puzzlePiece1[0] + puzzlePiece2[0];
    for (let i = 0; i < puzzlePiece1.length; i++) {
        if(priorSum !== puzzlePiece1[i] + puzzlePiece2[i]) {
            return false;
        }
    }
    return true;
}

console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])) // ➞ true

console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]))// ➞ true

console.log(puzzlePieces([1, 2], [-1, -1])) // ➞ false

console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])) // ➞ false