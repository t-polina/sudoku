module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        for (let current = 1; current <= 9; current++) {
          if (trueNumber(matrix, row, col, current)) {
            matrix[row][col] = current;
            if (solveSudoku(matrix)) {
              return matrix;
            }
            matrix[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;   
}

function trueNumber(matrix, currentRow, currentCol, current) {
  let mainRow = Math.floor(currentRow / 3) * 3;
  let mainCol = Math.floor(currentCol / 3) * 3;
  
  for (let col = 0; col < 9; col++) {
    if (col != currentCol && matrix[currentRow][col] === current) {
      return false;
    }
  }
  
  for (let row = 0; row < 9; row++) {
    if (row != currentRow && matrix[row][currentCol] === current) {
        return false;
    }
  }

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (row != currentRow && col != currentCol && matrix[mainRow + row][mainCol + col] === current) {
        return false;
      }
    }
  }

  return true;
}
