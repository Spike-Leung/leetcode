/**
 * 167. Two Sum II - Input array is sorted
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let num1 = numbers[i];
    let num2 = target - num1;

    let left = i + 1;
    let right = numbers.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const midVal = numbers[mid];

      if (midVal === num2) {
        return [i + 1, mid + 1];
      } else if (midVal > num2) {
        right = mid - 1;
      } else if (midVal < num2) {
        left = mid + 1;
      }
    }
  }
};

var twoSum2 = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left += 1;
    } else if (sum > target) {
      right -= 1;
    }
  }
};

module.exports = twoSum2;
