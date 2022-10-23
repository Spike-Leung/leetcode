// https://leetcode.cn/problems/partition-array-into-disjoint-intervals/
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  const n = nums.length
  const minRight = new Array(n).fill(0)
  minRight[n - 1] = nums[n - 1]

  for (let i = n - 2; i >= 0; i--) {
    minRight[i] = Math.min(nums[i], minRight[i + 1])
  }

  let maxLeft = 0

  for (let i = 0; i < n - 1; i++) {
    maxLeft = Math.max(maxLeft, nums[i])

    if (maxLeft <= minRight[i + 1]) {
      return i + 1
    }
  }
}
module.exports = partitionDisjoint
