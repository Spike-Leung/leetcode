/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums.length) {
    return 0;
  }

  const firstIndex = getFirstIndex(nums, target);
  const lastIndex = getLastIndex(nums, target);

  return firstIndex === -1 ? 0 : (lastIndex - firstIndex + 1);
};

function getFirstIndex(nums, target) {
  return getIndex(nums, target);
}

function getLastIndex(nums, target) {
  return getIndex(nums, target, false);
}

function getIndex(nums, target, isFirst = true) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midVal = nums[mid];

    if (midVal === target) {
      if (isFirst && nums[mid - 1] === target) {
        right = mid - 1;
      } else if (!isFirst && nums[mid + 1] === target) {
        left = mid + 1;
      } else {
        return mid;
      }
    } else if (midVal > target) {
      right = mid - 1;
    } else if (midVal < target) {
      left = mid + 1;
    }
  }

  return -1;
}

module.exports = search;
