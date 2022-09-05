const rob = require("./code")

const houses = [1,2,3,1]
const money = 4
test(`Max money rod from ${houses} shoule be ${money}`, () => {
  expect(rob(houses)).toBe(money)
})

const houses1 = [2,7,9,3,1]
const money1 = 12
test(`Max money rod from ${houses1} shoule be ${money1}`, () => {
  expect(rob(houses1)).toBe(money1)
})
