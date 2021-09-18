const search = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midVal = nums[mid];

    if (midVal === target) {
      left = mid + 1;
    } else if (midVal > target) {
      right = mid;
    } else if (midVal < target) {
      left = mid + 1;
    }
  }

  return nums[left - 1] === target ? left - 1 : left;
};

module.exports = search;
