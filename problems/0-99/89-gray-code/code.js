// https://leetcode-cn.com/problems/gray-code/
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  let dp = [[], [0, 1], [0, 1, 3, 2]];

  for (let i = 3; i <= n; i++) {
    dp[i] = [];

    for (let j = 0; j < dp[i - 1].length; j++) {
      dp[i].push(dp[i - 1][j] << 1);
    }

    for (let j = dp[i - 1].length - 1; j >= 0; j--) {
      dp[i].push((dp[i - 1][j] << 1) + 1);
    }
  }

  return dp[n];
};

module.exports = grayCode;
