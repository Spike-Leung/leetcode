// https://leetcode.cn/problems/next-greater-element-ii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const stack = []
  const n = nums.length
  const res = []

  for (let i = n * 2 - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop()
    }

    res[i % n] = stack.length ? stack[stack.length - 1] : -1

    stack.push(nums[i % n])
  }

  return res
};
module.exports = nextGreaterElements
