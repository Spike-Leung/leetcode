// https://leetcode.cn/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 初始化为 1，即包含第一行的值
  const dp = Array.from({ length: n}, () => 1)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1]
    }
  }

  return dp[n - 1]
};
module.exports = uniquePaths
