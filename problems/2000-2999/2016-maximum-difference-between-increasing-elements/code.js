// https://leetcode-cn.com/problems/maximum-difference-between-increasing-elements/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let maxDiff = -1;
    let n = nums.length;
    let minimun = nums[0];

    for(let i = 1; i < n; i++) {
      if (nums[i] > minimun) {
          maxDiff = Math.max(maxDiff, nums[i] - minimun);
      } else {
          minimun = nums[i];
      }
    }
    return maxDiff;
};

module.exports = maximumDifference;
