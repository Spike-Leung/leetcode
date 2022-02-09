// https://leetcode-cn.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = Number.MAX_VALUE;
      count++;
    }
  }

  return count === 0
    ? nums.length
    : nums.sort((a, b) => a - b).slice(0, -count).length;
};

module.exports = removeElement;
