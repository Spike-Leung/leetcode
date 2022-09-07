// Https://leetcode.cn/problems/shortest-unsorted-continuous-subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (nums.length < 2) {
    return 0
  }

  const n = nums.length
  let stack = []
  let start = n
  let end = 0

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      start = Math.min(stack.pop(), start)
    }

    stack.push(i)
  }

  stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      end = Math.max(stack.pop(), end)
    }

    stack.push(i)
  }

  return end >= start ? end - start + 1 : 0

}
module.exports = findUnsortedSubarray
