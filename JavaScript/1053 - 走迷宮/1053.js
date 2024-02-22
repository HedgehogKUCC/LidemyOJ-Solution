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
  const HEIGHT = TEMP[0];
  const WIDTH = TEMP[1];

  const MATRIX = [];
  const VISITED = new Array(HEIGHT).fill('').map(() => new Array(WIDTH).fill(false));
  const DIRECTIONS = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];
  
  const QUEUE = [];

  QUEUE.push({
    x: 0,
    y: 0,
    path: '0, 0',
    step: 0
  })
  VISITED[0][0] = true;

  const END = [HEIGHT - 1, WIDTH - 1];

  for (let i = 1; i <= HEIGHT; i++) {
    let tempArray = [];

    for (let j = 0; j < WIDTH; j++) {
      tempArray.push(lines[i][j]);
    }

    MATRIX.push(tempArray);
  }

  while(QUEUE.length) {
    // log(QUEUE)
    // log(`QUEUE length: ${QUEUE.length}`)
    let current = QUEUE.shift();
    // log(current)

    if (current.x === END[0] && current.y === END[1]) {
      // log(current.path);
      log(current.step);
      break;
    }

    // 節點嘗試往［右、左、下、上］
    for (let dir of DIRECTIONS) {
      let nextY = current.x + dir[0];
      let nextX = current.y + dir[1];
      // log(`=== let dir of DIRECTIONS ===`)
      // log(`nextY: ${nextY}`)
      // log(`nextX: ${nextX}`)
  
      if (
        nextY < HEIGHT &&
        nextY >= 0 &&
        nextX < WIDTH &&
        nextX >= 0 &&
        MATRIX[nextY][nextX] === '.' &&
        VISITED[nextY][nextX] === false
      ) {
        //log(`${nextY}, ${nextX}`)
        let tempStep = current.step;
        let _path = `${current.path} => ${nextY}, ${nextX}`;
        let _step = ++tempStep;

        QUEUE.push({
          x: nextY,
          y: nextX,
          path: _path,
          step: _step
        });

        VISITED[nextY][nextX] = true;
      }
    }
  }
}

// 3 4
// .#..
// ....
// ....

// 6 8
// ......##
// #.#.#...
// ..###.#.
// .##.....
// ....##.#
// #.#.....

// 9 18
// ...##########....#
// ##........###.##.#
// #########.###.##.#
// ...#...##.###.##.#
// .#.#.#.##.###.##.#
// .#...#....###.##.#
// .############.##.#
// ..............##.#
// ################..
