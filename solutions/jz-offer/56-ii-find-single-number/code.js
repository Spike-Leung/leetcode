/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const counts = [];
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < 32; j++) {
      if (counts[j] === undefined) {
        counts[j] = 0;
      }

      counts[j] += nums[i] & 1;
      nums[i] >>= 1;
    }
  }

  for (let i = counts.length - 1; i >= 0; i--) {
    res <<= 1;
    res |= (counts[i] % 3);
  }

  return res;
};

module.exports = singleNumber;
