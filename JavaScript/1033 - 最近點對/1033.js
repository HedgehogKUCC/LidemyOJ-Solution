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
  const DATA = [];
  const COORDINATE_DISTANCE = [];
  const ANSWER = [];

  for (let i = 1; i <= GROUP; i++) {
    let temp = lines[i].split(' ').map(Number);
    DATA.push(temp);
  }

  // log(DATA)

  for (let j = 0; j < GROUP; j++) {
    //log(`j = ${DATA[j]}`)
    let x1 = DATA[j][0];
    let y1 = DATA[j][1];

    for (let k = 0; k < GROUP; k++) {
      if (j === k) { continue; }
      //log(`k = ${DATA[k]}`)

      let x2 = DATA[k][0];
      let y2 = DATA[k][1];
      let sum = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
      let tempCoordinateAndDistance = [];

      tempCoordinateAndDistance.push(x1, y1, x2, y2, sum);
      COORDINATE_DISTANCE.push(tempCoordinateAndDistance);
    }
  }

  // log(COORDINATE_DISTANCE)

  for (let m = 0; m < COORDINATE_DISTANCE.length; m++) {
    if (m === 0) {
      ANSWER.push(COORDINATE_DISTANCE[m]);
      continue;
    }

    let answerDistance = ANSWER[0][4];
    let tempDistance = COORDINATE_DISTANCE[m][4];

    // log(answerDistance, tempDistance)

    if ( answerDistance > tempDistance ) {
      ANSWER.length = 0;
      ANSWER.push(COORDINATE_DISTANCE[m]);
    }
  }

  // log(ANSWER);
  for (let answer of ANSWER) {
    let x1 = answer[0];
    let y1 = answer[1];
    let x2 = answer[2];
    let y2 = answer[3];

    if (x1 < x2) {
      log(x1, y1);
      log(x2, y2);
      return;
    }

    if (x1 > x2) {
      log(x2, y2);
      log(x1, y1);
      return;
    }

    if (y1 < y2) {
      log(x1, y1);
      log(x2, y2);
      return;
    }

    if (y1 > y2) {
      log(x2, y2);
      log(x1, y1);
      return;
    }

    log(x1, y1);
    log(x2, y2);
  }
}
