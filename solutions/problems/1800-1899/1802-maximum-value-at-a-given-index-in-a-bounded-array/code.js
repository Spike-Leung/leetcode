// https://leetcode.cn/problems/maximum-value-at-a-given-index-in-a-bounded-array/
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
  let left = 1
  let right = maxSum
  const leftCount = index
  const rightCount = n - index - 1

  while (left <= right) {
    const target = left + ((right - left) >> 2)
    const sum = calc(target, index) + calc(target, n - index - 1) + target

    if (sum <= maxSum) {
      left = target + 1
    } else {
      right = target - 1
    }
  }

  return left - 1
};

function calc(m, k) {
  if (m > k) {
    return (2 * m - k - 1) * k / 2
  } else {
    return (m - 3)*m / 2 + k + 1
  }
}

module.exports = maxValue
