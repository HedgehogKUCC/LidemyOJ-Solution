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
  const number = Number(lines[0]);

  for (let i = 1; i <= number; i++) {
    let symbol = '';

    for (let j = 1; j <= i; j++) {
      symbol += '*';
    }

    log(symbol);
  }
}
