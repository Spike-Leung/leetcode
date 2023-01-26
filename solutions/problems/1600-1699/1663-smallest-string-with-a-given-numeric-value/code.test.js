const getSmallestString = require("./code")

const n = 3, k = 27
const res = 'aay'
test(`Smallest string with n: ${n}, k: ${k} should be ${res}`, () => {
  expect(getSmallestString(n, k)).toBe(res)
})

const n1 = 5, k1 = 73
const res1 = 'aaszz'
test(`Smallest string with n: ${n1}, k: ${k1} should be ${res1}`, () => {
  expect(getSmallestString(n1, k1)).toBe(res1)
})
