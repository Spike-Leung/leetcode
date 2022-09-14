const subsets = require("./code")

const nums = [0]
const res = [[], [0]]

test(`Subsets of ${nums} should be ${res}`, () => {
  expect(subsets(nums)).toEqual(res)
})
