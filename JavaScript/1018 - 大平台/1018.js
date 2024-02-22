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
  const numbers = lines[1].split(' ').map(Number);
  const maxNumber = Math.max(...numbers);
  const answer = [];
  
  for (let i = 1; i <= maxNumber; i++) {
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (i === numbers[j]) {
        sum++;
      }
    }
    answer.push(sum);
  }

  console.log(Math.max(...answer));
}
