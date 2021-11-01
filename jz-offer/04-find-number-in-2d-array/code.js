/**
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }

  let row = 0;
  let column = matrix[0].length - 1;

  while (row < matrix.length && column >= 0) {
    const candidate = matrix[row][column];

    if (candidate === target) {
      return true;
    } else if (candidate > target) {
      column -= 1;
    } else if (candidate < target) {
      row += 1
    }
  }

  return false;
};

module.exports = findNumberIn2DArray;
