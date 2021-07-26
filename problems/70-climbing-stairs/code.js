/**
 * 70. Climbing Stairs
 *
 * https://leetcode-cn.com/problems/climbing-stairs/
 *
 * Solution: https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/
 * 解题思路，先从n=0, n=1, n=5等, 通过例子找找规律
 * n = 1 , 1
 * n = 2 , 2
 * n > 2 , f(n) = f(n-1) + f(n-2)
 *
 * 1. 递归
 * 2. 备忘录 （降低时间复杂度）
 * 3. dp表 （降低空间复杂度）
 *
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

module.exports = climbStairs;
