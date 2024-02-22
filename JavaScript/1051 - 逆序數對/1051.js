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
  const COUNT = Number(lines[0]);
  const NUMBERS = lines[1].split(' ').map(Number);
  const MIN = Math.min(...NUMBERS);
  let sum = 0;

  for (let i = 0; i < COUNT; i++) {
    if (NUMBERS[i] === MIN) { continue; }

    for (let j = i + 1; j < COUNT; j++) {
      if (NUMBERS[i] > NUMBERS[j]) {
        sum++;
      }
    }
  }

  log(sum);
}
