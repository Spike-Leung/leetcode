/**
 * 153. Find Minimum in Rotated Sorted Array
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let min;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midVal = nums[mid];
    // 左边有序
    if (nums[left] <= midVal) {
      min =
        min !== undefined
          ? Math.min(nums[left], min)
          : Math.min(nums[left], midVal);
      left = mid + 1;
    } else {
      min = min !== undefined ? Math.min(midVal, min) : midVal;
      right = mid - 1;
    }
  }

  return min;
};

module.exports = findMin;
