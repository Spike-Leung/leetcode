const getMaximumConsecutive = require("./code")

const coins = [1, 3]
const count = 2
test(`Maximum Consecutive with ${coins} is ${count}`, () => {
  expect(getMaximumConsecutive(coins)).toBe(count)
})

const coins1 = [1,4,10,3,1]
const count1 = 20
test(`Maximum Consecutive with ${coins1} is ${count1}`, () => {
  expect(getMaximumConsecutive(coins1)).toBe(count1)
})
