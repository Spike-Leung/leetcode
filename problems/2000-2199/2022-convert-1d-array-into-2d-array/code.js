// https://leetcode-cn.com/problems/convert-1d-array-into-2d-array/
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  const length = original.length;

  if (length / n !== m) {
    return [];
  }

  let index = 0;
  let res = [];

  while (index < length) {
    const row = [];

    for (let i = 0; i < n; i++) {
      row.push(original[index]);
      index++;
    }

    res.push(row);
  }

  return res;
};

module.exports = construct2DArray;
