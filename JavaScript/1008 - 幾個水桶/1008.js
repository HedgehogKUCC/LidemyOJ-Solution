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
  const limitMin = 1;
  const base = 2;
  const exponentMax = 31;
  const limitMax = base ** exponentMax - 1;
  const regexNonDigit = /\D/g;
  const answer = [];
  let tempInputData = 0;
  
  if (regexNonDigit.test(lines[0])) {
    console.log(`請輸入自然數`);
    return;
  }

  if (Number(lines[0]) < limitMin || Number(lines[0]) > limitMax) {
    console.log(`超出限制範圍 ${limitMin} ~ ${limitMax}`);
    return;
  }

  tempInputData = Number(lines[0]);

  do {
    const exponent = Math.floor(Math.log(tempInputData) / Math.log(base));
    answer.push(exponent);
    tempInputData -= base ** exponent;
  } while (tempInputData > 0);
}
