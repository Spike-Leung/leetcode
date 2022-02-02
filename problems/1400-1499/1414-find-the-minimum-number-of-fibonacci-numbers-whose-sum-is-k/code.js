// https://leetcode-cn.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  const fibonacci = [1, 1];

  while (true) {
    fibonacci[fibonacci.length] =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];

    if (fibonacci[fibonacci.length - 1] > k) {
      break;
    }
  }

  let count = 0;
  while (k !== 0) {
    k = k - getFisrtNumberLessThanK(fibonacci, k);
    count++;
  }

  return count;
};

function getFisrtNumberLessThanK(nums, k) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let midVal = nums[mid];

    if (midVal === k) {
      return midVal;
    } else if (midVal > k) {
      right = mid - 1;
    } else if (midVal < k) {
      left = mid + 1;
    }
  }

  return nums[right];
}

module.exports = findMinFibonacciNumbers;
