/**
 * 1. Two Sum
 *
 * https://leetcode-cn.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let sumIndexArr = [];
  let i = 0;
  let j = 1;

  while (i < nums.length) {
    while(j < nums.length) {
      if (nums[i] + nums[j] === target) {
        sumIndexArr = [i, j];
      }

      j++;
    }

    i++;
    j = i + 1;
  }

  return sumIndexArr;
};

module.exports = twoSum;
