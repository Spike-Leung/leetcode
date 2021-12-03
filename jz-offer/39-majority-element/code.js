/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const countMap = {};
  const halfLength = nums.length >> 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (countMap[num] !== undefined) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }

  for (let i in countMap) {
    if (countMap[i] > halfLength) {
      return +i;
    }
  }
};

module.exports = majorityElement;
