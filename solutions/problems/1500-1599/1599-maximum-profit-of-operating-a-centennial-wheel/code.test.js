const minOperationsMaxProfit = require("./code")

const customers = [8,3], boardingCost = 5, runningCost = 6
const res = 3
test(`minOperationsMaxProfit(${customers}, ${boardingCost}, ${runningCost}) = ${res}`, () => {
  expect(minOperationsMaxProfit(customers, boardingCost, runningCost)).toBe(res)
})

const customers1 = [10,9,6], boardingCost1 = 6, runningCost1 = 4
const res1 = 7
test(`minOperationsMaxProfit(${customers1}, ${boardingCost1}, ${runningCost1}) = ${res1}`, () => {
  expect(minOperationsMaxProfit(customers1, boardingCost1, runningCost1)).toBe(res1)
})
