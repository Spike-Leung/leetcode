const sortArray = require("./code")

const arr = [5,2,3,1]
const res = [1,2,3,5]
test(`sort ${arr} should be ${res}`, () => {
  sortArray(arr)
  expect(arr).toEqual(res)
})

const arr1 = [5,1,1,2,0,0]
const res1 = [0,0,1,1,2,5]
test(`sort ${arr1} should be ${res1}`, () => {
  sortArray(arr1)
  expect(arr1).toEqual(res1)
})
