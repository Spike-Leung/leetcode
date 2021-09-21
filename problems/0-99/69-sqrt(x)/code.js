/**
 * 69. Sqrt(x)
 *
 * https://leetcode-cn.com/problems/sqrtx/
 *
 * @Param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
  if (x === 1 || x === 0) {
    return x;
  }

  let left = 1;
  let right = x - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midSquare = mid * mid;

    if (midSquare === x) {
      return mid;
    } else if (midSquare < x) {
      left = mid + 1;
    } else if (midSquare > x)  {
      right = mid - 1;
    }
  }

  return left - 1;
};

module.exports = mySqrt;
