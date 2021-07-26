/**
 * 70. Climbing Stairs
 *
 * https://leetcode-cn.com/problems/climbing-stairs/
 *
 * Solution: https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/
 *
 * Link: https://github.com/labuladong/fucking-algorithm/blob/master/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%AF%A6%E8%A7%A3%E8%BF%9B%E9%98%B6.md
 *
 * 解题思路，先从n=0, n=1, n=5等, 通过例子找找规律
 * n = 1 , 1
 * n = 2 , 2
 * n > 2 , f(n) = f(n-1) + f(n-2)
 *
 * 1. 递归
 * 2. 解决重叠子问题
 *   2.1 备忘录 （降低时间复杂度） 自顶向下
 *   2.2 dp表 （降低空间复杂度） 自底向上
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function climbStairsWithMemo(memo, n) {
    if (n === 1 || n === 2) {
      return n;
    }

    if (!memo[n]) {
      memo[n] =
        climbStairsWithMemo(memo, n - 1) + climbStairsWithMemo(memo, n - 2);
    }

    return memo[n];
  }
  return climbStairsWithMemo({}, n);
};

// with dp table
function climbStairsWithDPTable(n) {
  if (n === 1 || n === 2) {
    return n;
  }

  const dp = [];

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

module.exports = climbStairs;
