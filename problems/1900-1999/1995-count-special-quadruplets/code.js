/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
  let count = 0;

  for (let d = 3; d < nums.length; d++) {
    for (let c = 2; c < d; c++) {
      if (nums[c] >= nums[d]) {
        continue;
      }

      for (let b = 1; b < c; b++) {
        if (nums[b] + nums[c] >= nums[d]) {
          continue;
        }

        for (let a = 0; a < b; a++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) {
            count++;
          }
        }
      }
    }
  }

  return count;
};

module.exports = countQuadruplets;
