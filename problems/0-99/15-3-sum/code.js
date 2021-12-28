/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortNums = nums.sort((a, b) => a - b);
  const result = [];

  for (let k = 0; k < sortNums.length; k++) {
    if (sortNums[k] > 0) {
      return result;
    }

    while (k > 0 && k < sortNums.length && sortNums[k] === sortNums[k - 1]) {
      k++;
    }

    let l = k + 1;
    let r = sortNums.length - 1;

    while (l < r) {
      const sum = nums[k] + nums[l] + nums[r];

      if (sum === 0) {
        result.push([nums[k], nums[l], nums[r]]);
        l++;
        r--;
      } else if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      }

      while (l < r && l - 1 > k && nums[l] === nums[l - 1]) {
        l++;
      }

      while (l < r && nums[r] === nums[r + 1]) {
        r--;
      }
    }
  }

  return result;
};

module.exports = threeSum;
