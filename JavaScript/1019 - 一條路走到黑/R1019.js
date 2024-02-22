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

  dfs(0, 0);
  visited[0][0] = true;
}

function dfs(x, y) {
  // log(`${x} === ${height - 1} && ${y} === ${width - 1}`);
  // log(visited);

  if (x === height - 1 && y === width - 1) {
    // log(`Final ~`);
    log(answer.length);
    return;
  }

  for (let dir of dirs) {
    let nextX = x + dir[0];
    let nextY = y + dir[1];

    if (
      nextX < height &&
      nextX >= 0 &&
      nextY < width &&
      nextY >= 0 &&
      matrix[nextX][nextY] === '.' && // "." => Road, "#" => Wall
      visited[nextX][nextY] === false
    ) {
      visited[nextX][nextY] = true;
      // log(`dfs(${nextX}, ${nextY})`);
      let temp = [];
      temp.push(nextX, nextY)
      answer.push(temp);

      dfs(nextX, nextY);
      // visited[nextX][nextY] = false;
    }
  }
}

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
