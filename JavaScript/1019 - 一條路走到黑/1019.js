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

// 參考文章：https://juejin.cn/post/7001005056606601252
/**
 * 深度優先搜尋 ( Depth-First-Search，DFS )
 * https://zh.wikipedia.org/zh-tw/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2
 */

const log = console.log;

const matrix = [];
const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // 右、左、上、下
let visited = null;
const answer = [];

let width = 0;
let height = 0;

function solve(lines) {
  const temp = lines[0].split(' ').map(Number);
  width = temp[0];
  height = temp[1];

  visited = new Array(height).fill('').map(() => new Array(width).fill(false));
  
  for (let i = 1; i <= height; i++) {
    matrix.push(lines[i].split(''));
  }

  let currentRow = 0;
  let currentColumn = 0;
  let isFinal = false;

  visited[currentRow][currentColumn] = true;

  do {
    for (let dir of dirs) {
      let nextX = currentRow + dir[0];
      let nextY = currentColumn + dir[1];
      
      if (
        nextX < height &&
        nextX >= 0 &&
        nextY < width &&
        nextY >= 0 &&
        matrix[nextX][nextY] === '.' &&
        visited[nextX][nextY] === false
      ) {
        visited[nextX][nextY] = true;
        // log(`visited[${nextX}][${nextY}]`);

        let temp = [];
        temp.push(nextX, nextY)
        answer.push(temp);

        currentRow = nextX;
        currentColumn = nextY;

        if (currentRow === height - 1 && currentColumn === width - 1) {
          isFinal = true;
          break;
        }
      }
    }
    // log(`currentRow: ${currentRow}, currentColumn: ${currentColumn}`);
    // log(`isFinal: ${isFinal}`)
  } while (!isFinal);
  // log(`currentRow: ${currentRow}, currentColumn: ${currentColumn}`);
  // log(visited);
  // log(answer);
  log(answer.length);
}

// 6 5
// .#####
// .#####
// .#####
// .#####
// ......

// 3 3
// .#.
// .#.
// ...

// 18 9
// ...##########....#
// ##........###.##.#
// #########.###.##.#
// ...#...##.###.##.#
// .#.#.#.##.###.##.#
// .#...#....###.##.#
// .############.##.#
// ..............##.#
// ################..
