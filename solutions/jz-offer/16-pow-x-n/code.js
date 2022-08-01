/**
 *
 * https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow1 = function(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  if (n === -1) {
    return 1 / x;
  }

  let pow = myPow(x, n >> 1);

  pow *= pow;

  if (n & 1 === 1) {
    pow *= x;
  }

  return pow;
};

module.exports = myPow;
