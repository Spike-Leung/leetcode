/**
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (nums[left] >= nums[right]) {
    if (right - left === 1) {
      return nums[right];
    }

    mid = left + Math.floor((right - left) / 2);

    if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
      return findMinInOrder(nums, left, right);
    }

    if (nums[mid] >= nums[left]) {
      left = mid;
    } else if (nums[mid] <= nums[right]) {
      right = mid;
    }
  }

  return nums[mid];
};

function findMinInOrder(nums, left, right) {
  let result = nums[left];

  for (let i = left + 1; i <= right; ++i) {
    if (result > nums[i]) {
      result = nums[i];
    }
  }

  return result;
}

module.exports = findMin;
