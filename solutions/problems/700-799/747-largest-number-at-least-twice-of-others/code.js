// https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if (nums.length === 1) {
    return 0;
  }

  const n = nums.length;
  let maxNum = 0;
  let maxNumIndex = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
      maxNumIndex = i;
    }
  }

  for (let i = 0; i < n; i++) {
    if (i !== maxNumIndex && maxNum < nums[i] * 2) {
      return -1;
    }
  }

  return maxNumIndex;
};

module.exports = dominantIndex;
