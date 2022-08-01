// https://leetcode-cn.com/problems/number-of-enclaves/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  return numEnclavesDfs(grid);
};

function numEnclavesDfs(grid) {
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const n = grid.length;
  const m = grid[0].length;
  const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
  let res = 0;

  function dfs(grid, row, col) {
    if (row < 0 || col < 0 || row >= n || col >= m || grid[row][col] === 0 || visited[row][col]) {
      return;
    }

    visited[row][col] = true;

    for (const [x, y] of dirs) {
      dfs(grid, row + x, col + y);
    }
  }

  for (let i = 0; i < n; i++) {
    dfs(grid, i, 0);
    dfs(grid, i, m - 1);
  }

  for (let i = 1; i < m - 1; i++) {
    dfs(grid, 0, i);
    dfs(grid, n - 1, i);
  }


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        res++;
      }
    }
  }

  return res;
}

function numEnclavesBfs(grid) {
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const n = grid.length;
  const m = grid[0].length;
  const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
  let res = 0;
  let current = [];

  for (let i = 0; i < n; i++) {
    current.push([i, 0]);
    current.push([i, m - 1]);
  }

  for (let i = 1; i < m - 1; i++) {
    current.push([0, i]);
    current.push([n - 1, i]);
  }

  while (current.length) {
    let next = [];

    for (const [x, y] of current) {
      if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] === 0 || visited[x][y]) {
        continue;
      }

      visited[x][y] = true;

      for (const [r, c] of dirs) {
        next.push([x + r, y + c]);
      }
    }

    current = next;
  }


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        res++;
      }
    }
  }

  return res;
}

function hash(x, y) {
  return `${x},${y}`;
}

module.exports = {
  numEnclavesDfs,
  numEnclavesBfs,
};
