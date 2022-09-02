// https://leetcode.cn/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const rows = grid.length
  const cols = grid[0].length
  let count = 0

  function dfs(row, col) {
    // 越界
    if (row < 0 || col < 0 || row >= rows || col >= cols) {
      return
    }

    // 非岛屿
    if (grid[row][col] !== "1") {
      return
    }

    // 标记遍历过
    grid[row][col] = "2"

    // 像四周继续 dfs
    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }

  // 对整个 grid 扫描，遇到陆地，则累计一个岛屿，同时 dfs 标记这个岛屿
  // 岛屿的个数 = dfs 的次数
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++
        dfs(i, j)
      }
    }
  }

  return count
};


module.exports =  numIslands
