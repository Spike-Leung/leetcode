const findKthLargest = require("./code")

const arr = [3,2,1,5,6,4]
const k = 2
const res = 5
test(`${k} th larget num in ${arr} is ${res}`, () => {
  expect(findKthLargest(arr, k)).toBe(res)
})

const arr1 = [3,2,3,1,2,4,5,5,6]
const k1 = 4
const res1 = 4
test(`${k1} th larget num in ${arr1} is ${res1}`, () => {
  expect(findKthLargest(arr1, k1)).toBe(res1)
})
