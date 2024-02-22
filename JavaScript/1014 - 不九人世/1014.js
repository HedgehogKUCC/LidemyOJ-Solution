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

function solve(lines) {
  const arr = lines[0].split('').reverse();
  const arrLength = arr.length;
  const base = 9;
  let answer = 0;

  for (let i = 0; i < arrLength; i++) {
    answer += arr[i] * base ** i;
  }

  console.log(answer);
}
