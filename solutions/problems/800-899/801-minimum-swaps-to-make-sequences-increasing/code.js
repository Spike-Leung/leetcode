// https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {
  const n = nums1.length
  const dp = Array.from({ length: n }, () => [])
  dp[0][0] = 0
  dp[0][1] = 1

  for (let i = 1; i < n; i++) {
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
        // 可交换，可不换，取最小值
        dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1])
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + 1
      } else {
        // 只有原来数组满足升序，因此，交换或者不交换，上一值也要同步交换或者不交换
        dp[i][0] = dp[i - 1][0]
        dp[i][1] = dp[i - 1][1] + 1
      }
    } else {
     // 原来的数组不满足升序，但交换后满足; 上一个不换，那么当前值就要换；上一个换，当前就不换
     dp[i][0] = dp[i - 1][1]
     dp[i][1] = dp[i - 1][0] + 1
    }
  }

  return Math.min(dp[n - 1][0], dp[n - 1][1])
}
module.exports = minSwap
