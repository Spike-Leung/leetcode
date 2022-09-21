const canFormArray = require("./code")

const arr = [91,4,64,78]
const pieces = [[78],[4,64],[91]]
test(`${pieces} CAN form ${arr}`, () => {
  expect(canFormArray(arr, pieces)).toBe(true)
})

const arr1 = [49,18,16]
const pieces1 = [[16,18,49]]
test(`${pieces1} CAN NOT form ${arr1}`, () => {
  expect(canFormArray(arr1, pieces1)).toBe(false)
})
