/**
 * 704. Binary Search
 * https://leetcode-cn.com/problems/binary-search/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + ((right - left) / 2));
    const midVal = nums[mid];

    if (midVal === target) {
      return mid;
    } else if (midVal > target) {
      right = mid - 1;
    } else if (midVal < target) {
      left = mid + 1;
    }
  }

  return -1;
};

module.exports = search;
