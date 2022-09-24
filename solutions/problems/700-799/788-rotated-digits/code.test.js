const rotatedDigits = require("./code")

const num = 10
const count = 4
test(`There are ${count} good num from 1 to ${num}`, () => {
  expect(rotatedDigits(num)).toBe(count)
})

const num1 = 857
const count1 = 247
test(`There are ${count1} good num1 from 1 to ${num1}`, () => {
  expect(rotatedDigits(num1)).toBe(count1)
})

const num2 = 12
const count2 = 5
test(`There are ${count2} good num2 from 1 to ${num2}`, () => {
  expect(rotatedDigits(num2)).toBe(count2)
})
