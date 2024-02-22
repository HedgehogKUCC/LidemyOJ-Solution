var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

const log = console.log;

function solve(lines) {
  const HEIGHT = lines.length;
  const WIDTH = lines[0].length;

  const MATRIX = [];
  const MATRIX_SUM = [];
  let result = "";

  for (let i = 0; i < HEIGHT; i++) {
    let temp = [];

    for (let j = 0; j < WIDTH; j++) {
      if (lines[i][j] === 'O') {
        temp.push(0);
      } else {
        temp.push(1);
      }
    }

    MATRIX.push(temp);
  }

  // log(MATRIX)

  for (let k = 0; k < HEIGHT; k++) {
    let rowSum = 0;
    let colSum = 0;

    for (let m = 0; m < WIDTH; m++) {
      rowSum += MATRIX[k][m];
      colSum += MATRIX[m][k];
    }

    MATRIX_SUM.push(rowSum, colSum);
  }

  const TOP_LEFT_TO_BOTTOM_RIGHT_SUM = MATRIX[0][0] + MATRIX[1][1] + MATRIX[2][2];
  const TOP_RIGHT_TO_BOTTOM_LEFT_SUM = MATRIX[0][2] + MATRIX[1][1] + MATRIX[2][0];

  MATRIX_SUM.push(TOP_LEFT_TO_BOTTOM_RIGHT_SUM, TOP_RIGHT_TO_BOTTOM_LEFT_SUM);

  // log(MATRIX_SUM);
  for (let m = 0; m < MATRIX_SUM.length; m++) {
    if (MATRIX_SUM[m] === 0) {
      result = "O";
      break;
    }

    if (MATRIX_SUM[m] === 3) {
      result = "X";
      break;
    }
  }

  result ? log(result) : log("DRAW");
}
