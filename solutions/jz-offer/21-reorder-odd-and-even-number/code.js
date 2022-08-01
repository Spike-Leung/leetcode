/**
 *
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    while (left < right && (nums[left] & 1) === 1) {
      left++;
    }

    while (left < right && (nums[right] & 1) === 0) {
      right--;
    }

    if (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
  }

  return nums;
};

module.exports = exchange;
