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
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1 || n === 2) {
    return n;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};


module.exports = climbStairs;
