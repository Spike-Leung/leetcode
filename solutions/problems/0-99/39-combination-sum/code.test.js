const combinationSum = require("./code")

const candidates = [2,3,6,7]
const target = 7
const res = [[2,2,3],[7]]
test(`Combination sum of target: ${target} and candidates: ${candidates} are ${res}`, () => {
  expect(combinationSum(candidates, target)).toEqual(res)
})
