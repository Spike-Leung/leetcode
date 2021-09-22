/**
 * 81. Search in Rotated Sorted Array II
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midVal = nums[mid];

    if (midVal === target) {
      return true;
    } else if (midVal > nums[left]) {
      // 左边有序，midVal 为最大值
      if (midVal > target && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (midVal < nums[right]){
      // 右边有序，midVal 为右边最小值， nums[right] 为右边最大值
      if (target > midVal && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/solution/sou-suo-xuan-zhuan-pai-xu-shu-zu-ii-by-l-0nmp/
      left++;
      right--;
    }
  }

  return false;
};

var checkIsSame = function (nums, left, right, target) {
  for (let i = left; i <= right; i++) {
    if (nums[i] !== target) {
      return false;
    }
  }

  return true;
}

module.exports = search;
