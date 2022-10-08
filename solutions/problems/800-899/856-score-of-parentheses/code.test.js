const scoreOfParentheses = require("./code")

const parentheses = "(()(()))"
const score = 6
test(`Score of ${parentheses} is ${score}`, () => {
  expect(scoreOfParentheses(parentheses)).toBe(score)
})
