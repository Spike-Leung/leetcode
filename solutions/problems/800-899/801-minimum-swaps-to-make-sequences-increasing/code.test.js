const minSwap = require("./code")

const arrA = [1,3,5,4]
const arrB = [1,2,3,7]
const count = 1
test(`Min swap to make ${arrA} and ${arrB} ascending is ${count}`, () => {
  expect(minSwap(arrA, arrB)).toBe(count)
})

const arrA1 = [0,3,5,8,9]
const arrB1 = [2,1,4,6,9]
const count1 = 1
test(`Min swap to make ${arrA1} and ${arrB1} ascending is ${count1}`, () => {
  expect(minSwap(arrA1, arrB1)).toBe(count1)
})
