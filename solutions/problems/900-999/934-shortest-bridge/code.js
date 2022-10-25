// https://leetcode.cn/problems/shortest-bridge/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const rows = grid.length
  const cols = grid[0].length
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const MARK = 2
  const edges = []
  let step = 0
  // 标识是否已经找到一个岛屿，避免在找岛屿时，将两个岛屿都标记了
  let findIsland = false

  function isLegal(row, col) {
    return row >= 0 && col >= 0 && row < rows && col < cols
  }

  // dfs
  function markIsland(row, col) {
    if (!isLegal(row, col) || grid[row][col] === MARK) {
      return
    }

    if (grid[row][col] === 0) {
      grid[row][col] = MARK
      edges.push([row, col])
      return
    }

    // 标记为其他数字，从而和另一个岛屿区分
    grid[row][col] = MARK

    // 四周扩散递归
    for (const [x, y] of dirs) {
      markIsland(row + x, col + y)
    }
  }

  // 找到第一个岛屿
  for (let i = 0; i < rows && !findIsland; i++) {
    for (let j = 0; j < cols && !findIsland; j++) {
      if (grid[i][j] === 1) {
        findIsland = true
        markIsland(i, j)
      }
    }
  }

  // 从岛屿边缘开始进行 BFS
  while (edges.length !== 0) {
    step++

    // 遍历当前这一层的边缘
    const count = edges.length

    for (let i = 0; i < count; i++) {
      const [r, c] = edges.shift()

      for (const [x, y] of dirs) {
        const row = r + x
        const col = c + y

        if (!isLegal(row, col) || grid[row][col] === 2) {
          continue
        }

        if (grid[row][col] === 0) {
          edges.push([row, col])
          grid[row][col] = MARK
        } else if (grid[row][col] === 1) {
          return step
        }
      }
    }
  }

  return step
}

module.exports = shortestBridge
