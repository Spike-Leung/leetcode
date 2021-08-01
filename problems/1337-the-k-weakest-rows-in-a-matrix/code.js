/**
 * 1337. The K Weakest Rows in a Matrix
 *
 * https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix/
 */
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const soldierNumMat = mat.map((m, index) => {
    const lastIndexOfSoldier = m.lastIndexOf(1);

    return [lastIndexOfSoldier !== -1 ? lastIndexOfSoldier + 1 : 0, index];
  });

  return soldierNumMat
    .sort((a, b) => a[0] - b[0])
    .slice(0, k)
    .map((i) => i[1]);
};

module.exports = kWeakestRows;
