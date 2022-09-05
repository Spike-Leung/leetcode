// https://leetcode.cn/problems/subarray-sum-equals-k
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0
  const n = nums.length
  // 前缀和为 0 的有一个
  const prefixSumMap = { 0: 1 }
  let prefixSum = 0

  for (let i = 0; i < n; i++) {
    prefixSum += nums[i]

    // 如果存在一个前缀和等于当前前缀和 - k，意味着找到了一个符合条件的前缀和，累计这个前缀和出现的次数
    if (prefixSumMap[prefixSum - k]) {
      count += prefixSumMap[prefixSum - k]
    }

    // 存储当前的前缀和，如果存在，则出现次数 + 1
    if (prefixSumMap[prefixSum]) {
      prefixSumMap[prefixSum]++
    } else {
      prefixSumMap[prefixSum] = 1
    }
  }

  return count
};
module.exports = subarraySum
