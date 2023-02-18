// https://leetcode.cn/problems/find-positive-integer-solution-for-a-given-equation/
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  const MIN = 1
  const MAX = 1000
  let res = []

  function binarySearchY(x) {
    let l = MIN
    let r = MAX

    while (l <= r) {
      let y = l + ((r - l) >> 1)
      const result = customfunction.f(x, y)

      if (result === z) {
        res.push([x, y])
        break;
      } else if (result > z) {
        r = y - 1
      } else if (result < z) {
        l = y + 1
      }
    }
  }

  for (let x = MIN; x <= MAX; x++) {
    binarySearchY(x)
  }

  return res
};
module.exports = findSolution
