// https://leetcode-cn.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let n = nums.length;
  let left = 0;

  for (let right = 0; right < n; right++) {
    if (nums[right] === val) {
      nums[left] = val;
      left++;
    }
  }

  return left;
};

module.exports = removeElement;
