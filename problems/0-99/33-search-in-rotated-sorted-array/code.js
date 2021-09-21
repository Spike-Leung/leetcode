/**
 * 33. Search in Rotated Sorted Array
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 *
 * 二分查找，mid的左右，总有一个区间是递增的，通过判断target是否在递增区间内，
 * 决定怎么缩小查找区间
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midVal = nums[mid];
    const leftVal = nums[left];
    const rightVal = nums[right];

    // 找到则返回
    if (midVal === target) {
      return mid;
    } else if (midVal >= leftVal) {
      if (target < midVal && target >= leftVal) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > midVal && target <= rightVal) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

module.exports = search;
