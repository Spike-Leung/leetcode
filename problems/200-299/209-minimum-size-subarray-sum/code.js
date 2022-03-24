// https://leetcode-cn.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const n = nums.length;

  let l = 0;
  let r = 0;
  let sum = 0;
  let length = Number.MAX_VALUE;

  while (r < n) {
    sum += nums[r];

    while (sum >= target) {
      length = Math.min(length, (r - l + 1));
      sum -= nums[l];
      l++;
    }

    r++;
  }

  return length === Number.MAX_VALUE ? 0 : length;
};

module.exports = minSubArrayLen;
