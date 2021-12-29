/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
  const hash = {};
  const length = nums.length;
  let count = 0;

  for (let b = length - 3; b > 0; b--) {
    for (let d = b + 2; d < length; d++) {
      const diff = nums[d] - nums[b + 1];
      hash[diff] ? hash[diff]++ : (hash[diff] = 1);
    }

    for (let a = 0; a < b; a++) {
      const sum = nums[a] + nums[b];
      count += hash[sum] ? hash[sum] : 0;
    }
  }

  return count;
};

module.exports = countQuadruplets;
