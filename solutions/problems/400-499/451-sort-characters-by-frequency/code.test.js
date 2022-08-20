const frequencySort = require("./code")

const s = "tree"
const res = "eert | eetr"
test(`${s} after sort should be ${res}`, () => {
  const expected = ["eert", "eetr"].includes(frequencySort(s))
  expect(expected).toBe(true)
})

const s1 = "cccaaa"
const res1 = "cccaaa | aaaccc"
test(`${s1} after sort should be ${res1}`, () => {
  const expected = ["cccaaa", "aaaccc"].includes(frequencySort(s1))
  expect(expected).toBe(true)
})

const s2 = "Aabb"
const res2 = "bbAa | bbaA"
test(`${s2} after sort should be ${res2}`, () => {
  const expected = ["bbAa", "bbaA"].includes(frequencySort(s2))
  expect(expected).toBe(true)
})
