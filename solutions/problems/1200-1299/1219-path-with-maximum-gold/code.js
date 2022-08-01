// https://leetcode-cn.com/problems/path-with-maximum-gold/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let maximumGold = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== 0) {
        maximumGold = Math.max(maximumGold, dfs(grid, i, j));
      }
    }
  }

  return maximumGold;
};

function dfs(grid, row, col, visited = {}) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    grid[row][col] === 0 ||
    visited[`${row}${col}`]
  ) {
    return 0;
  }

  visited[`${row}${col}`] = true;

  let gold =
    grid[row][col] +
    Math.max(
      dfs(grid, row + 1, col, visited),
      dfs(grid, row - 1, col, visited),
      dfs(grid, row, col + 1, visited),
      dfs(grid, row, col - 1, visited)
    );

  delete visited[`${row}${col}`];

  return gold;
}

module.exports = getMaximumGold;
