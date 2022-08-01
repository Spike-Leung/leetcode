/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 *
 * @param {number[]} nums
 * @return {number}
 */

/**
 * time: O(n)
 * space: O(n)
 *
 * 空间换时间
 */
var findRepeatNumber = function(nums) {
  const arr = [];
  let repeatNumber;

  for (let i = 0; i < nums.length; i++) {
    if (!arr[nums[i]]) {
      arr[nums[i]] = true;
    } else {
      repeatNumber = nums[i];
      break;
    }
  }

  return repeatNumber;
};

/**
 * time: O(n)
 * space: O(1)
 *
 * 改动了原数组
 *
 */
var findRepeatNumber1 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      const current = nums[i];

      if (nums[current] === current) {
        return current;
      } else {
        const temp = nums[current];

        // swap
        nums[current] = current;
        nums[i] = temp;
      }
    }
  }

  return -1;
}

/**
 * time: O(nlogn)
 * space: O(1)
 *
 * 不改变原数组，时间换空间
 */
var findRepeatNumber2 = function(nums) {
  let startNum = 0;
  let endNum = nums.length - 1;

  // count nums between start and end
  function countInRange(nums, start, end) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= start && nums[i] <= end) {
        count++
      }
    }

    return count;
  }

  while (startNum <= endNum) {
    const midNum = startNum + Math.floor((endNum - startNum) / 2);
    const halfCount = midNum - startNum + 1;
    const count = countInRange(nums, startNum, midNum);

    if (startNum === endNum) {
      if (count > 1) {
        return startNum;
      } else {
        return -1
      }
    }

    if (count > halfCount) {
      endNum = midNum;
    } else {
      startNum = midNum + 1;
    }
  }
}



module.exports = {
  findRepeatNumber,
  findRepeatNumber1,
  findRepeatNumber2
};
