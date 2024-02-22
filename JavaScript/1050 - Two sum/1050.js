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
  const [COUNT, TARGET] = lines[0].split(' ').map(Number);
  const NUMBERS = lines[1].split(' ').map(Number);

  for (let i = 0; i < COUNT; i++) {
    let tempAnswer = TARGET - NUMBERS[i];
    
    if (tempAnswer < 0) {
      continue;
    }

    for (let j = 0; j < COUNT; j++) {
      if (i === j) { continue; }

      if (tempAnswer === NUMBERS[j]) {
        if (i > j) {
          log(j, i);
          return;
        }

        log(i, j);
        return;
      }
    }
  }

  // for (let i = 0; i < COUNT; i++) {
  //   for (let j = 0; j < COUNT; j++) {
  //     if (i === j) { continue; }

  //     if (NUMBERS[i] + NUMBERS[j] === TARGET) {
  //       if (i > j) {
  //         log(j, i);
  //         return;
  //       }

  //       log(i, j);
  //       return;
  //     }
  //   }
  // }
}
