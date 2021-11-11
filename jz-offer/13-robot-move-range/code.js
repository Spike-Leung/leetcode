/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const visited = [];

  for (let i = 0; i < m; ++i) {
    visited.push([]);
  }

  return accumulateCount(m, n, k, 0, 0 , visited);
};

function accumulateCount(rows, columns, maximum, row, column, visited) {
  if (
    row < 0 ||
    row >= rows ||
    column < 0 ||
    column >= columns ||
    visited[row][column] === null ||
    calcSum(row, column) > maximum
  ) {
    return 0;
  }

  visited[row][column] = null;

  return 1 + (
    accumulateCount(rows, columns, maximum, row + 1, column, visited) +
    accumulateCount(rows, columns, maximum, row - 1, column, visited) +
    accumulateCount(rows, columns, maximum, row, column + 1, visited) +
    accumulateCount(rows, columns, maximum, row, column - 1, visited)
  )
}

function calcSum(row, column) {
  let rowSum = 0;
  let columnSum = 0;

  while (row > 0) {
    rowSum += row % 10;
    row = Number.parseInt(row / 10);
  }

  while (column > 0) {
    columnSum += column % 10;
    column = Number.parseInt(column / 10);
  }

  return rowSum + columnSum;
}

module.exports = {
  calcSum,
  movingCount,
};
