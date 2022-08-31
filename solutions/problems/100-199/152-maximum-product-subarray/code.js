// https://leetcode.cn/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const n = nums.length
  let res = nums[0]
  let max = nums[0]
  let min = nums[0]

  for (let i = 1; i < n; i++) {
    // max 构成的最大值
    const maxProduct = max * nums[i]
    // min 构成的最大值
    const minProduct = min * nums[i]

    max = Math.max(maxProduct, minProduct, nums[i])
    min = Math.min(maxProduct, minProduct, nums[i])

    res = Math.max(res, max)
  }

  return res
};
module.exports = maxProduct
