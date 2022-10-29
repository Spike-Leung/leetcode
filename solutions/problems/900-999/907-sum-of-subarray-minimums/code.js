// https://leetcode.cn/problems/sum-of-subarray-minimums/
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  const MOD = Math.pow(10, 9) + 7
  const left = []
  const right = []
  const n = arr.length
  let stack = []

  for (let i = 0; i < n; i++) {
    while (stack.length && arr[peak(stack)] > arr[i]) {
      stack.pop()
    }

    left[i] = stack.length === 0 ? -1 : peak(stack)

    stack.push(i)
  }

  stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[peak(stack)] >= arr[i]) {
      stack.pop()
    }

    right[i] = stack.length === 0 ? n : peak(stack)
    stack.push(i)
  }

  let sum = 0
  for (let i = 0; i < n; i++) {
    sum = (sum + (i - left[i]) * arr[i] * (right[i] - i)) % MOD
  }

  return sum
};

function peak(arr) {
  return arr[arr.length - 1]
}
module.exports = sumSubarrayMins
