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
  const GROUP = Number(lines[0]);
  const PER_GROUP_COUNT = 4;
  const DATA = [];

  let count = 0;
  const TEMP_DATA = [];

  for (let i = 1; i <= GROUP*PER_GROUP_COUNT; i++) {
    count++;
    TEMP_DATA.push(Number(lines[i]));

    if (count === 4) {
      count = 0;
      DATA.push(JSON.parse(JSON.stringify(TEMP_DATA)));
      TEMP_DATA.length = 0;
    }
  }

  DATA.forEach((d) => {
    let sum = 0;
    let x1 = d[0];
    let y1 = d[1];
    let x2 = d[2];
    let y2 = d[3];
    
    sum = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
    log(sum.toFixed(2));
  })
}
