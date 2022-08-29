const uniquePaths = require("./code")

const m = 3
const n = 7
const paths = 28
test(`There are ${paths} paths in m: ${m} and n: ${n}`, () => {
  expect(uniquePaths(m, n)).toBe(paths)
})

const m1 = 3
const n1 = 2
const paths1 = 3
test(`There are ${paths1} paths in m1: ${m} and n: ${n}`, () => {
  expect(uniquePaths(m1, n1)).toBe(paths1)
})

const m2 = 3
const n2 = 2
const paths2 = 3
test(`There are ${paths2} paths in m2: ${m} and n: ${n}`, () => {
  expect(uniquePaths(m2, n2)).toBe(paths2)
})
