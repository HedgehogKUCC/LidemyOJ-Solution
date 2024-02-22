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
  const TEMP = lines[0].split(' ').map(Number);
  const X_LENGTH = TEMP[0];
  const Y_LENGTH = TEMP[1];

  const X = lines[1].split(' ').map(Number);
  const Y = lines[2].split(' ').map(Number);

  let min = Infinity;

  for (let i = 0; i < X_LENGTH; i++) {
    for (let j = 0; j < Y_LENGTH; j++) {
      let temp_distance = Math.abs(X[i] - Y[j]);
    
      if (temp_distance < min) {
        min = temp_distance;
      }
    }
  }

  log(min);
}
