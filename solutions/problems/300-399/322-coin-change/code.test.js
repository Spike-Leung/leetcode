const coinChange = require("./code")

const coins = [1, 2, 5]
const amount = 11
const res = 3
test(`We need at least ${res} coins to put together ${amount} with ${coins}`, () => {
  expect(coinChange(coins, amount)).toBe(res)
})

const coins1 = [2]
const amount1 = 3
const res1 = -1
test(`We need at least ${res1} coins to put together ${amount1} with ${coins1}`, () => {
  expect(coinChange(coins1, amount1)).toBe(res1)
})

const coins2 = [1, 2, 5]
const amount2 = 100
const res2 = 20
test(`We need at least ${res2} coins to put together ${amount2} with ${coins2}`, () => {
  expect(coinChange(coins2, amount2)).toBe(res2)
})
