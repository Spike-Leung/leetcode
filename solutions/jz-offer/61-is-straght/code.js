/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  let zeroCount = 0;
  let minimum = Infinity;
  let map = {};
  let isValid = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else {
      map[nums[i]] = true;
      minimum = Math.min(minimum, nums[i]);
    }
  }

  for (let i = 1; i < 5; i++) {
    if (map[minimum + i]) {
      continue;
    } else if (zeroCount > 0) {
      zeroCount--;
    } else {
      isValid = false;
    }
  }

  return isValid;
};

module.exports = isStraight;
