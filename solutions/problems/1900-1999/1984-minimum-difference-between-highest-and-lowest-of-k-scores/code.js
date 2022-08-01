// https://leetcode-cn.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  if (k < 2) {
    return 0;
  }

  let res = Number.MAX_VALUE;
  let n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = k - 1; i < n; i++) {
    res = Math.min(res, (nums[i] - nums[i - k + 1]));
  }

  return res;
};

module.exports = minimumDifference;
