/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const sortNums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortNums.length; i++) {
    while (i > 0 && sortNums[i] === sortNums[i - 1]) {
      i++;
    }

    for (let j = i + 1; j < sortNums.length; j++) {
      while (j > i + 1 && sortNums[j] == sortNums[j - 1]) {
        j++;
      }

      let left = j + 1;
      let right = sortNums.length - 1;

      while (left < right) {
        const sum = sortNums[i] + sortNums[j] + sortNums[left] + sortNums[right];

        if (sum === target) {
          result.push([sortNums[i] , sortNums[j] , sortNums[left] , sortNums[right]]);
          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }

        while (left < right && left > j + 1 && sortNums[left] === sortNums[left - 1]) {
          left++;
        }

        while (left < right && sortNums[right] === sortNums[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
};

module.exports = fourSum;
