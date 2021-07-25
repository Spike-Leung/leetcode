/**
 * 26. Remove Duplicates from Sorted Array
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 0;
  let currNum = "";

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num !== currNum) {
      nums[count] = num;
      currNum = num;
      count ++;
    }
  }

  return count;
};

module.exports = removeDuplicates;
