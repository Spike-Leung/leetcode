const stoneGameII = require("./code")

const piles = [2,7,9,4,4]
const res = 10
test(`Max stones Alice can get from ${piles} should be ${res}`, () => {
  expect(stoneGameII(piles)).toBe(res)
})

const piles1 = [1,2,3,4,5,100]
const res1 = 104
test(`Max stones Alice can get from ${piles1} should be ${res1}`, () => {
  expect(stoneGameII(piles1)).toBe(res1)
})
