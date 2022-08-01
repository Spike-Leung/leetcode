// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // 前面的和是负数，加上的话肯定会变小，那就不加，直接选取当前元素作为新的和
    if (sum <= 0) {
      sum = num;
    } else {
      sum += num;
    }

    // 保存每次计算获得的最大和
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};

module.exports = maxSubArray;
