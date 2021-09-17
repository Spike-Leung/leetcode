const leftBound = function leftBound(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const midVal = nums[mid];

    if (midVal === target) {
      right = mid;
    } else if (midVal > target) {
      right = mid;
    } else if (midVal < target) {
      left = mid + 1;
    }
  }

  if (left === nums.length) {
    return -1;
  }

  return nums[left] === target ? left : -1;
};

module.exports = leftBound;
