// https://leetcode.cn/problems/maximum-ascending-subarray-sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  const n = nums.length
  let max = nums[0]
  let count = nums[0]

  for (let i = 1; i < n; i++) {
    // 升序则累积
    if (nums[i] > nums[i - 1]) {
      count += nums[i]
    } else {
      // 重置累积值，比较此时累积的最大值
      max = Math.max(max, count)
      count = nums[i]
    }
  }

  max = Math.max(max, count)

  return max
};
module.exports = maxAscendingSum
