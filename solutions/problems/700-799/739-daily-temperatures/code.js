// https://leetcode.cn/problems/daily-temperatures/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const stack = []
  const n = temperatures.length
  const res = []

  for (let i = n - 1; i >= 0; i--) {
    // pop element if top element is strict small than current element
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop()
    }

    // 从右往左遍历构造的单调递增栈，表示的是，右边第一个比入栈元素大的数字
    // 因此，当一个元素可以入栈，此时栈顶表示的就是第一个比它大的数字
    // 用第一个比入栈元素大的数字下标减去当前下标，即为多少天后升温
    res[i] = stack.length ? (stack[stack.length - 1] - i) : 0
    stack.push(i)
  }

  return res
};
module.exports = dailyTemperatures
