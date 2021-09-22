/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const NOT_FOUND = [-1, -1];
  const firstIndex = leftBound(nums, target);

  if (firstIndex === -1) {
    return NOT_FOUND;
  }
x
  const lastIndex = leftBound(nums, target + 1, firstIndex + 1) - 1;

  if (
    firstIndex <= lastIndex &&
    nums[firstIndex] === target &&
    nums[lastIndex] === target
  ) {
    return [firstIndex, lastIndex];
  }

  return NOT_FOUND;
};

function leftBound(nums, target, initLeft = 0) {
  let left = initLeft;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midVal = nums[mid];

    if (midVal === target) {
      right = mid - 1;
    } else if (midVal > target) {
      right = mid - 1;
    } else if (midVal < target) {
      left = mid + 1;
    }
  }

  return left;
}

module.exports = searchRange;
