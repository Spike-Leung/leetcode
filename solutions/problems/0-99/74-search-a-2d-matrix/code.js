/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let columnLeft = 0;
  let columnRight = matrix.length;

  const matrixFirstVal = matrix[0][0];
  const matrixLastRow = matrix[columnRight - 1];
  const matrixLastVal = matrixLastRow[matrixLastRow.length - 1];

  if (target < matrixFirstVal || target > matrixLastVal) {
    return false;
  }

  while (columnLeft < columnRight) {
    const mid = Math.floor((columnRight - columnLeft) / 2) + columnLeft;
    const midVal = matrix[mid][0];

    if (midVal === target) {
      return true;
    } else if (midVal > target) {
      columnRight = mid;
    } else if (midVal < target) {
      columnLeft = mid + 1;
    }
  }

  const row = columnLeft - 1;
  const rowArr = matrix[row];

  let rowLeft = 0;
  let rowRight = rowArr.length - 1;

  while (rowLeft <= rowRight) {
    const rowMid = Math.floor((rowRight - rowLeft) / 2) + rowLeft;
    const rowMidVal = rowArr[rowMid];

    if (rowMidVal === target) {
      return true;
    } else if (rowMidVal > target) {
      rowRight = rowMid - 1;
    } else if (rowMidVal < target) {
      rowLeft = rowMid + 1;
    }
  }

  return false;
};

module.exports = searchMatrix;
