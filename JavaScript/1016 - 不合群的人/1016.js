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
  const people = Number(lines[0]);
  let sumA = 0;
  let sumB = 0;
  let answerA = [];
  let answerB = [];

  for (let i = 1; i <= people; i++) {
    if (lines[i] === 'A') {
      sumA++;
      answerA.push(i);
      continue;
    }

    if (lines[i] === 'B') {
      sumB++;
      answerB.push(i);
      continue;
    }
  }

  if (!sumA || !sumB || sumA === sumB) {
    console.log(`PEACE`);
    return;
  }

  if (sumA > sumB) {
    answerB.forEach((person) => {
      console.log(person);
    })
  }

  if (sumA < sumB) {
    answerA.forEach((person) => {
      console.log(person);
    })
  }
}
