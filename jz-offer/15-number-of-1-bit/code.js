/**
 *
 * https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  let flag = 1;

  while (flag) {
    n & flag && (count++);
    flag <<= 1;
  }

  return count;
};

var hammingWeight2 = function(n) {
  let count = 0;

  while (n) {
    n &= (n - 1);
    count ++;
  }

  return count;
}

module.exports = {
  hammingWeight,
  hammingWeight2
};
