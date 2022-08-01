// https://leetcode-cn.com/problems/single-element-in-a-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let mid = left;

  while (left <= right) {
    mid = left + Math.floor((right - left) >> 1);
    const midVal = nums[mid];

    if (
      (nums[mid - 1] &&
        nums[mid + 1] &&
        nums[mid - 1] < midVal &&
        nums[mid + 1] > midVal) ||
      left === right
    ) {
      return midVal;
    } else if (nums[mid - 1] && nums[mid - 1] === midVal) {
      if ((mid + 1) % 2 === 0) {
        left = mid + 1;
      } else {
        right = mid - 2;
      }
    } else if (nums[mid + 1] && nums[mid + 1] === midVal) {
      if (mid % 2 === 0) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    }
  }

  return nums[mid];
};

module.exports = singleNonDuplicate;
