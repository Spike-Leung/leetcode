/**
 * 35. Search Insert Position
 *
 * https://leetcode-cn.com/problems/search-insert-position/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const midVal = nums[mid];

    if (midVal === target) {
      return mid;
    } else if (midVal > target) {
      right = mid;
    } else if (midVal < target) {
      left = mid + 1;
    }
  }

  const insertIndex = nums[right] > target ? right : right + 1;

  if (insertIndex > nums.length) {
    return nums.length;
  }

  return insertIndex;
};

module.exports = searchInsert;
