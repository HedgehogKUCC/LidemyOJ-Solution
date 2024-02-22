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
  const [A, B] = lines[0].split(" ");

  const limitMin = 1;
  // Number.MAX_SAFE_INTEGER = 9007199254740991;
  const limitMax = 2 ** 31 - 1;

  const regexNonDigit = /\D/g;

  if (regexNonDigit.test(A)) {
    console.log(`第一個數字請輸入自然數`);
    return;
  }

  if (regexNonDigit.test(B)) {
    console.log(`第二個數字請輸入自然數`);
    return;
  }
  
  if (Number(A) < limitMin || Number(A) > limitMax) {
    console.log(`第一個數字超過限制範圍 ${limitMin} ~ ${limitMax}`);
    return;
  }

  if (Number(B) < limitMin || Number(B) > limitMax) {
    console.log(`第二個數字超過限制範圍 ${limitMin} ~ ${limitMax}`);
    return;
  }

  Number(A) === Number(B) ? console.log(`Yes`) : console.log(`No`);
}
