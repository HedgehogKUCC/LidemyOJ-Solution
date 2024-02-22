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
  const ROWS = Number(lines[0]);
  const NUMBERS = [];
  let max_continuous_sum = 0;

  for (let i = 1; i <= ROWS; i++) {
    NUMBERS.push(Number(lines[i]));
  }

  for (let j = 0; j < ROWS; j++) {
    let tempSum = 0;

    for (let k = j; k < ROWS; k++) {
      tempSum += NUMBERS[k];

      if (tempSum > max_continuous_sum) {
        max_continuous_sum = tempSum;
      }
    }
  }

  log(max_continuous_sum);
}
