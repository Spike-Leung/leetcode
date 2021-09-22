/**
 * 162. Find Peak Element
 *
 * https://leetcode-cn.com/problems/find-peak-element/
 *
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) {
    return 0;
  }

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midVal = nums[mid];
    const midLeftVal = mid - 1 < 0 ? Number.NEGATIVE_INFINITY : nums[mid - 1];
    const midRightVal = mid + 1 === nums.length ? Number.NEGATIVE_INFINITY : nums[mid + 1];

    if (midVal > midLeftVal && midVal > midRightVal) {
      return mid;
    } else if (midVal < midLeftVal) {
      right = mid - 1;
    } else if (midVal < midRightVal) {
      left = mid + 1;
    }
  }
};

module.exports = findPeakElement;
