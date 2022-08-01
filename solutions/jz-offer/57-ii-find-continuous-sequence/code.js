/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let left = 1;
  let right = 2;
  let sum = 3;
  let result = [];

  while (left < right) {
    if (sum === target) {
      const arr = [];

      for (let i = left; i <= right; i++) {
        arr.push(i);
      }

      result.push(arr);
    }

    if (sum >= target) {
      sum -= left;
      left++;
    } else {
      right++;
      sum += right;
    }
  }

  return result;
};

module.exports = findContinuousSequence;
