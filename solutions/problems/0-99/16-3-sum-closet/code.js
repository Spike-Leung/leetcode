/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);
  let closetSum;

  for (let k = 0; k < nums.length; k++) {
    while (k > 0 && k < nums.length && nums[k] === nums[k - 1] ) {
      k++;
    }

    let l = k + 1;
    let r = nums.length - 1;

    closetSum === undefined && (closetSum = nums[k] + nums[l] + nums[r]);

    while (l < r) {
      const sum = nums[k] + nums[l] + nums[r];

      if (sum === target) {
        closetSum = sum;
        break;
      } else if (Math.abs(sum - target) - Math.abs(closetSum - target) < 0) {
        closetSum = sum;
      } else if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      }

      while (l < r && l - 1 > k && nums[l] === nums[l -1]) {
        l++;
      }

      while (l < r && nums[r] === nums[r + 1]) {
        r--;
      }
    }
  }

  return closetSum;
};

module.exports = threeSumClosest;
