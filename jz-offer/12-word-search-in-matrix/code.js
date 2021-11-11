/**
 * https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
 *
 * 思路: https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/58d5vh/
 *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let row = 0; row < board.length; ++row) {
    for (let column = 0; column < board[0].length; ++column) {
      if (dfs(board, word, row, column, 0)) {
        return true;
      }
    }
  }

  return false;
};

function dfs(board, word, row, column, wordIndex) {
  if (
    row < 0 ||
    row === board.length ||
    column < 0 ||
    column === board[0].length ||
    board[row][column] !== word[wordIndex]
  ) {
    return false;
  }

  if (wordIndex === word.length - 1) {
    return true;
  }

  board[row][column] = null;

  const res =
    dfs(board, word, row + 1, column, wordIndex + 1) ||
    dfs(board, word, row - 1, column, wordIndex + 1) ||
    dfs(board, word, row, column + 1, wordIndex + 1) ||
    dfs(board, word, row, column - 1, wordIndex + 1);

  board[row][column] = word[wordIndex];

  return res;
}

module.exports = exist;
