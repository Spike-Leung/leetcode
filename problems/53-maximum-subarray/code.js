/**
 * 53. Maximum Subarray
 *
 * https://leetcode-cn.com/problems/maximum-subarray/
 *
 * solution: https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/
 * 1. 贪心算法
 * 2. 动态规划
 * - 求最优解（最大/最小）
 * - 可以拆分成独立的小问题，每个小问题的最有解最终可以获得大问题的最有解 （动态规划转移方程, 从n-1 -> n）
 * - 小问题会有重叠 (备忘录，dp表)
 * - 自上向下的思考问题，自下向上求问题
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // f(i) = Math.max(f(i-1) + nums[i] , nums[i])
  const length = nums.length;

  for (let i = 1; i < length; i ++) {
    if (nums[i - 1] > 0) {
      nums[i] = nums[i - 1] + nums[i];
    }
  }

  return Math.max(...nums);
};

module.exports = maxSubArray;
