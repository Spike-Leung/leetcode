// https://leetcode-cn.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const n = nums.length;

  let i = 0;
  // all in [0, j) are not equals to 0
  // all in [j, i) are equals to 0
  let j = 0;

  while (i < n) {
    if (nums[i] !== 0) {
      swap(nums, j++, i)
    }

    i++
  }

  return nums
};

function swap(nums, a, b) {
  const t = nums[a];
  nums[a] = nums[b];
  nums[b] = t;
}

module.exports = moveZeroes;
