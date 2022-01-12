// https://leetcode-cn.com/problems/increasing-triplet-subsequence/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  const n = nums.length;
  const leftMin = [nums[0]];
  const rightMax = [];

  rightMax[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
  }

  for (let i = 1; i < n; i++) {
    if (leftMin[i - 1] < nums[i] && nums[i] < rightMax[i + 1]) {
      return true;
    }
  }

  return false;
};

module.exports = increasingTriplet;
