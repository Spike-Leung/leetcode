const rightBound = function rightBound(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const midVal = nums[mid];

    if (midVal === target) {
      left = mid + 1;
    } else if (midVal > target) {
      right = mid;
    } else if (midVal < target) {
      left = mid + 1;
    }
  }

  // left === 0, left - 1 就越界了
  if (left === 0) {
    return -1;
  }

  // 因为命中 midVal === target 时， left = mid + 1，循环结束时，midVal 即 nums[left - 1] 有可能是 target, 需要判断一下
  return nums[left - 1] === target ? left - 1 : -1;
}

module.exports = rightBound;
