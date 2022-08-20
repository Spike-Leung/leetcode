// https://leetcode-cn.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const n = nums.length
  // all in [0, p0) equals to 0
  // all in [p0, i) equals to 1
  // all in (p2, n - 1] equals to 2
  let p0 = 0
  let p2 = n - 1
  let i = 0

  while (i <= p2) {
    if (nums[i] === 0) {
      swap(nums, p0++, i)
      i++
    } else if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      swap(nums, p2--, i)
    }
  }

  return nums;
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

module.exports = sortColors;
