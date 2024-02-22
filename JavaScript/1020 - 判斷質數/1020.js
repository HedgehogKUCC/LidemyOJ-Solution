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
  const rows = Number(lines[0]);
  const primePositiveFactorCount = 2;
  const answer = [];

  for (let i = 1; i <= rows; i++) {
    let tempArray = [];

    for (let j = 1; j <= Number(lines[i]); j++) {
      if (Number(lines[i]) % j === 0) {
        tempArray.push(j);
      }
    }

    tempArray.length === primePositiveFactorCount ? answer.push(`Prime`) : answer.push(`Composite`);
  }

  answer.forEach((s) => log(s));
}
