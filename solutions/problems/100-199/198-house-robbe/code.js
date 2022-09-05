// https://leetcode.cn/problems/house-robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  const n = nums.length

  // stealPrev 表示偷前面一个能获取的最大值
  let stealPrev = 0
  // notStealPrev 表示不同前面能获取的最大值
  let notStealPrev = nums[0]

  for (let i = 1; i < n; i++) {
    const temp = stealPrev
    // 不偷当前值，偷前面一个能获取的最大值，是前面一个选择偷或者不偷时的最大值
    stealPrev = Math.max(stealPrev, notStealPrev)
    // 不偷前面一个的最大值，为偷当前值，以及前面一个不偷时的最大值
    // 前面一个不偷的值对应的就是前面元素偷它前面元素获取的 stealPrev
    notStealPrev = nums[i] + temp
  }

  return Math.max(stealPrev, notStealPrev)
};
module.exports = rob
