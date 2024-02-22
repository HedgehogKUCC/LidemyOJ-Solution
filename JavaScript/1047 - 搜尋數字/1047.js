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
  const N = TEMP[0];
  const M = TEMP[1];

  const NUMBERS = [];

  for (let i = 1; i <= N; i++) {
    NUMBERS.push(Number(lines[i]));
  }

  for (let j = N + 1; j <= N + M; j++) {
    log(NUMBERS.indexOf(Number(lines[j])));
  }
}
