// https://leetcode.cn/problems/min-max-game/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  const n = nums.length

  if (n < 2) {
    return nums[0]
  }

  const newNums = Array.from({ length: n >> 1 })

  for (let i = 0; i < newNums.length; i++) {
    if (i % 2 === 0) {
      newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1])
    } else {
      newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1])
    }
  }

  return minMaxGame(newNums)
};
module.exports = minMaxGame
