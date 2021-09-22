/**
 * 153. Find Minimum in Rotated Sorted Array
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 *
 * After rotated, left most value is always greater than right most value
 * find the minimun "right most value"
 *
 * https://www.geekxh.com/1.9.%E4%BA%8C%E5%88%86%E6%B3%95%E7%B3%BB%E5%88%97/904.html#_01%E3%80%81%E9%A2%98%E7%9B%AE%E7%A4%BA%E4%BE%8B
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length;

  if (nums[left] < nums[right - 1]) {
    return nums[left];
  }

  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midVal = nums[mid];

    if (nums[0] === midVal) {
      left = mid + 1;
    } else if (nums[0] < midVal) {
      left = mid + 1;
    } else if (nums[0] > midVal) {
      right = mid;
    }
  }

  if (left === nums.length) {
    return nums[left - 1];
  }

  return nums[left];
};

module.exports = findMin;
