// https://leetcode-cn.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const n = nums.length;
  let l = 0;
  let r = 0;

  while (r < n) {
    if (nums[r] !== 0) {
      swap(nums, l ,r);
      l++;
    }
    r++;
  }

  return nums;
};

function swap(nums, a, b) {
  const t = nums[a];
  nums[a] = nums[b];
  nums[b] = t;
}

module.exports = moveZeroes;
