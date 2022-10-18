const atMostNGivenDigitSet = require("./code")

const digits = ["1", "4", "9"]
const max = 1000000000
const count = 29523
test(`There are ${count} num less or equal than ${max} with ${digits}`, () => {
  expect(atMostNGivenDigitSet(digits, max)).toBe(count)
})

const digits1 = ["3","4","5","6"]
const max1 = 64
const count1 = 18
test(`There are ${count1} num less or equal than ${max1} with ${digits1}`, () => {
  expect(atMostNGivenDigitSet(digits1, max1)).toBe(count1)
})

const digits2 = ["1","2","3","4","6","7","9"]
const max2 = 333
const count2 = 171
test(`There are ${count2} num less or equal than ${max2} with ${digits2}`, () => {
  expect(atMostNGivenDigitSet(digits2, max2)).toBe(count2)
})
