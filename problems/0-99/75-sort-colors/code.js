// https://leetcode-cn.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const n = nums.length;
  let p0 = 0;
  let p1 = 0;

  for (let i = 0;  i < n; i++) {
    if (nums[i] === 1) {
      swap(nums, p1, i);
      p1++;
    } else if (nums[i] === 0) {
      swap(nums, p0, i);

      if (p0 < p1) {
        swap(nums, p1, i);
      }

      p0++;
      p1++;
    }
  }

  return nums;
};

function swap(nums, a, b) {
  const t = nums[a];
  nums[a] = nums[b];
  nums[b] = t;
}

module.exports = sortColors;
