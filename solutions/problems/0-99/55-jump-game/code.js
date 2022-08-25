// https://leetcode.cn/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const n = nums.length
  // 当前可以到达的最远下标
  let maxReachableIndex = 0

  for (let i = 0; i <= maxReachableIndex; i++) {
    // 当前下标，可以到达的最远距离
    const distance = i + nums[i]

    // 如果能达到的最远距离大于等于数组长度，说明可以跳到终点
    if (distance >= n - 1) {
      return true
    }

    // 更新当前可以到达的最远下标
    maxReachableIndex = Math.max(maxReachableIndex, distance)
  }

  return false

};
module.exports = canJump
