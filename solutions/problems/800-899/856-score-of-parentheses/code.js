// https://leetcode.cn/problems/score-of-parentheses/
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  const stack = [0]

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(0)
    } else {
      const v = stack.pop()
      stack[stack.length - 1] += v === 0 ? 1 : 2 * v
    }
  }

  return stack[stack.length - 1]
}
module.exports = scoreOfParentheses
