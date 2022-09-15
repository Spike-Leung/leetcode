const getPermutation = require("./code")

const n = 3
const k = 3
const res = "213"
test(`${k}th of n: ${n} is ${res}`, () => {
  expect(getPermutation(n, k)).toBe(res)
})

const n1 = 4
const k1 = 9
const res1 = "2314"
test(`${k1}th of n: ${n1} is ${res1}`, () => {
  expect(getPermutation(n1, k1)).toBe(res1)
})
