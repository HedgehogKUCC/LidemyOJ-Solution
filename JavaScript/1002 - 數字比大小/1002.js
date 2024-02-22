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
  const lineRows = lines.length;
  const regexNonDigit = /\D/g;

  for (let i = 0; i < lineRows; i++) {
    let tmp = lines[i].split(' ');
    let a = tmp[0];
    let b = tmp[1];
    let MaxNumber = 2 ** 31 - 1;
    
    if (regexNonDigit.test(a)) {
      console.log(`第 ${i+1} 列第 1 個請輸入數字 0 ~ 9`);
      return;
    }

    if (Number(a) > MaxNumber) {
      console.log(`第 ${i+1} 列第 1 個請輸入小於等於 ${MaxNumber} 以下的值`);
      return;
    }

    if (regexNonDigit.test(b)) {
      console.log(`第 ${i+1} 列第 2 個請輸入數字 0 ~ 9`);
      return;
    }

    if (Number(b) > MaxNumber) {
      console.log(`第 ${i+1} 列第 2 個請輸入小於等於 ${MaxNumber} 以下的值`);
      return;
    }

    if (Number(a) === 0 && Number(b) === 0) {
      return;
    }

    Number(a) > Number(b) ? console.log(a) : console.log(b);
  }
}
