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
  const TEMP = lines[0].split(' ').map(Number);
  const START = TEMP[0];
  const END = TEMP[1];

  for (let i = START; i <= END; i++) {
    let tempI = i.toString();
    let digits = tempI.length;
    let sum = 0;
    
    if (digits === 1) {
      sum += Number(tempI) ** digits;
    } else {
      for (let j = 0; j < digits; j++) {
        let tempIArray = tempI.split('');
        sum += Number(tempIArray[j]) ** digits;
      }
    }

    i === sum ? log(i) : null;
  }
}
