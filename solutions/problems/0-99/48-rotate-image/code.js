// https://leetcode.cn/problems/rotate-image/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length

  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - i - 1][j]]  =[matrix[n - i - 1][j], matrix[i][j]]
    }
  }

  for (let i = 0; i < n; i++) {
    // 对角线是 i = j 的元素，只需要交换对角线左边的，即 j < i 的元素
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
}
module.exports = rotate
