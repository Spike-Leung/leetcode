/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const rightTarget = target - nums[left];

    if (nums[right] === rightTarget) {
      break;
    } else if (nums[right] < rightTarget) {
      left++;
    } else {
      right--;
    }
  }

  return [nums[left], nums[right]];
};

module.exports = twoSum;
