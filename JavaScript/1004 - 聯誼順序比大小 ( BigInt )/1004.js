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
  const rows = lines.length;
  const regexNonDigit = /\D/g;

  for (let i = 0; i < rows; i++) {
    if ( i === 0 ) {
      const rowOne = Number(lines[i]);

      if (rowOne < 1 || rowOne > 50) {
        console.log(`第 ${ i + 1 } 行數字超出 1 ~ 50`);
        return;
      }

      for (let j = i + 1; j <= rowOne; j++) {
        if (!lines[j] && lines[j] !== 0) { return; }

        const [A, B, K] = lines[j].split(" ");

        if (regexNonDigit.test(A)) {
          console.log(`第 ${ j + 1 } 行第 1 欄需為數字`);
          return;
        }

        if (regexNonDigit.test(B)) {
          console.log(`第 ${ j + 1 } 行第 2 欄需為數字`);
          return;
        }

        if (BigInt(A) === 0) {
          console.log(`第 ${ j + 1 } 行第 1 欄需為正整數不能為 0`);
          return;
        }

        if (BigInt(B) === 0) {
          console.log(`第 ${ j + 1 } 行第 2 欄需為正整數不能為 0`);
          return;
        }

        if (Number(K) !== 1 && Number(K) !== -1) {
          console.log(`第 ${ j + 1 } 行第 3 欄數字需是 1 或者 -1`);
          return;
        }

        // 特別注意的是 A 與 B 可能是很大的數字，但保證長度為 512 個位數以內
        if ( BigInt(A) === BigInt(B) ) {
          console.log("DRAW");
        } else {
          if (Number(K) === 1) {
            console.log(BigInt(A) > BigInt(B) ? 'A' : 'B');
          } else {
            console.log(BigInt(A) < BigInt(B) ? 'A' : 'B');
          }
        }
      }
    }
  }
}
