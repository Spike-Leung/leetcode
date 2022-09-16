// https://leetcode.cn/problems/surrounded-regions/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const rows = board.length
  const cols = board[0].length
  // 遍历边界，当碰到 O 的时候，进行 DFS，把 O 标记为 B
  // 第一行和最后一行
  for (let i = 0; i < cols; i++) {
    if (board[0][i] === "O") {
      dfs(board, 0, i, rows, cols)
    }

    if (board[rows - 1][i] === "O") {
      dfs(board, rows - 1, i, rows, cols)
    }
  }

  // 第一列和最后一列
  for (let i = 0; i < rows; i++) {
    if (board[i][0] === "O") {
      dfs(board, i, 0, rows, cols)
    }

    if (board[i][cols - 1] === "O") {
      dfs(board, i, cols - 1, rows, cols)
    }
  }

  // 遍历矩阵，将 O 变为 X，将 B 变为 O
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "B") {
        board[i][j] = "O"
      } else if (board[i][j] === "O") {
        board[i][j] = "X"
      }
    }
  }
};

function dfs(board, row, col, rows, cols) {
  // 到达边界，结束递归
  if (row < 0 || row >= rows || col < 0 || col >= cols) {
    return
  }

  // 碰到非 O 的格子，结束递归
  if (board[row][col] === "X" || board[row][col] === "B") {
    return
  }

  board[row][col] = "B"
  dfs(board, row + 1, col, rows, cols)
  dfs(board, row - 1, col, rows, cols)
  dfs(board, row, col + 1, rows, cols)
  dfs(board, row, col - 1, rows, cols)
}
module.exports = solve
