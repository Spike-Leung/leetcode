// https://leetcode.cn/problems/majority-element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = null
  let count = 0

  for (const num of nums) {
    if (count === 0) {
      candidate = num
      count = 1
    } else {
      count += candidate === num ? 1 : -1
    }
  }

  return candidate
};
module.exports = majorityElement
