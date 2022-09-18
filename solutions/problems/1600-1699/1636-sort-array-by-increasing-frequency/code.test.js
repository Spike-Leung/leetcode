const frequencySort = require("./code")

const nums = [-1,1,-6,4,5,-6,1,4,1]
const res = [5,-1,4,4,-6,-6,1,1,1]
test(`Frequency sort of ${nums} should be ${res}`, () => {
  expect(frequencySort(nums)).toEqual(res)
})
