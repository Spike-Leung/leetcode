const threeEqualParts = require("./code")

const arr = [1,0,1,0,1]
const res = [0,3]
test(`Three equal parts of ${arr} should be ${res}`, () => {
  expect(threeEqualParts(arr)).toEqual(res)
})

// const arr1 = [1,1,0,1,1]
// const res1 = [-1,-1]
// test(`Three equal parts of ${arr1} should be ${res1}`, () => {
//   expect(threeEqualParts(arr1)).toEqual(res1)
// })
