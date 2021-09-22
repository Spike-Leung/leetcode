/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midVal = nums[mid];

    if (midVal === target) {
      right =  mid - 1;
    } else if (midVal > target) {
      right = mid - 1;
    } else if (midVal < target) {
      left = mid + 1;
    }
  }

  const firstIndex = left === nums.length ? -1 : left;

  if (firstIndex === -1 || nums[firstIndex] !== target) {
    return [-1, -1];
  }

  let leftLast = firstIndex + 1;
  let rightLast = nums.length - 1;

  while (leftLast <= rightLast) {
    const mid = Math.floor((rightLast - leftLast) / 2) + leftLast;
    const midVal = nums[mid];

    if (midVal === target) {
      leftLast = mid + 1;
    } else if (midVal > target) {
      rightLast = mid - 1;
    } else if (midVal < target) {
      leftLast = mid + 1;
    }
  }

  const lastIndex = leftLast - 1;

  return [firstIndex, lastIndex];

};

module.exports = searchRange;
