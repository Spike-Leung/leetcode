// https://leetcode.cn/problems/counting-bits
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const ans = [0]

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      ans[i] = ans[i - 1] + 1
    } else {
      ans[i] = ans[i >> 1]
    }
  }

  return ans
};
module.exports = countBits
