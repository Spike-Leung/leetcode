// https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  const n = nums.length
  const preSum = new Array(n + 1).fill(0)
  let res = n + 1

  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }

  const queue = []

  for (let i = 0; i <= n; i++) {
    const curr = preSum[i]

    while (queue.length && curr - preSum[queue[0]] >= k) {
      res = Math.min(res, i - queue.shift())
    }

    while (queue.length && preSum[queue[queue.length - 1]] >= curr) {
      queue.pop()
    }

    queue.push(i)
  }

  return res > n ? -1 : res
};
module.exports = shortestSubarray
