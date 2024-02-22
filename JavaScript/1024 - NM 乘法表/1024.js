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
  const x = Number(lines[0]);
  const y = Number(lines[1]);

  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      log(`${i}*${j}=${i*j}`)
    }
  }
}
