// https://leetcode-cn.com/problems/valid-perfect-square/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 1;
  let right = Math.ceil(num / 2);

  console.log({ left, right });

  while (left <= right) {
    const mid = left + Math.floor((right - left) >> 1);
    const product = mid * mid;

    if (product === num) {
      return true;
    } else if (product > num) {
      right = mid - 1;
    } else if (product < num) {
      left = mid + 1;
    }
  }

  return false;
};

module.exports = isPerfectSquare;
