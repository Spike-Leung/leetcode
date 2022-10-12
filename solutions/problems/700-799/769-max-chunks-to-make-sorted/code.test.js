const maxChunksToSorted = require("./code")

const arr = [4,3,2,1,0]
const count = 1
test(`Max chunks to sorted of ${arr} is ${count}`, () => {
  expect(maxChunksToSorted(arr)).toBe(count)
})

const arr1 = [1,0,2,3,4]
const count1 = 4
test(`Max chunks to sorted of ${arr1} is ${count1}`, () => {
  expect(maxChunksToSorted(arr1)).toBe(count1)
})

const arr2 = [2,6,1,3,0,5,4]
const count2 = 1
test(`Max chunks to sorted of ${arr2} is ${count2}`, () => {
  expect(maxChunksToSorted(arr2)).toBe(count2)
})

const arr3 = [2,0,1,3]
const count3 = 2
test(`Max chunks to sorted of ${arr3} is ${count3}`, () => {
  expect(maxChunksToSorted(arr3)).toBe(count3)
})

const arr4 = [0,2,1]
const count4 = 2
test(`Max chunks to sorted of ${arr4} is ${count4}`, () => {
  expect(maxChunksToSorted(arr4)).toBe(count4)
})
