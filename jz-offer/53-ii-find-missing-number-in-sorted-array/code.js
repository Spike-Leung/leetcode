/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (mid === nums[mid]) {
      left = mid + 1;
    } else if (mid === 0 || nums[mid - 1] === mid - 1){
      return mid;
    } else {
      right = mid - 1;
    }
  }

  if (left === nums.length) {
    return nums.length;
  }

  return -1;
};

module.exports = missingNumber;
