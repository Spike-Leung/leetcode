// https://leetcode-cn.com/problems/qiu-12n-lcof/
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  n > 1 && (n += sumNums(n - 1));
  return n;
};

module.exports = sumNums;
