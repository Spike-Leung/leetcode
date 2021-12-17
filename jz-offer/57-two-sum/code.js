/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      break;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [nums[left], nums[right]];
};

module.exports = twoSum;
