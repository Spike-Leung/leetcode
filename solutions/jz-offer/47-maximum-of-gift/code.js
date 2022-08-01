// https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  const rowCount = grid.length;
  const columnCount = grid[0].length;
  const dp = [];

  for (let i = 0; i < rowCount; i++) {
    dp.push([]);
  };

  dp[0][0] = grid[0][0];

  for (let i = 1; i < rowCount; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0];
  }

  for (let i = 1; i < columnCount; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1];
  }

  for (let i = 1; i < rowCount; i++) {
    for (let j = 1; j < columnCount; j++) {
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    }
  }


  return dp[rowCount - 1][columnCount -1];
};

module.exports = maxValue;
