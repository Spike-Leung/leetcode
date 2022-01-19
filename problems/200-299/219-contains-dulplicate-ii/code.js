// https://leetcode-cn.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = {};
  const limit = Math.min(k, nums.length - 1);
  let left = 0;
  let right = 1;

  map[nums[left]] = true;

  for (right; right <= limit; right++) {
    if (map[nums[right]]) {
      return true;
    }

    map[nums[right]] = true;
  }

  delete map[nums[left]];
  left++;

  while (right < nums.length) {
    if (map[nums[right]]) {
      return true;
    }

    map[nums[right]] = true;

    delete map[nums[left]];
    left++;
    right++;
  }

  return false;
};

module.exports = containsNearbyDuplicate;
