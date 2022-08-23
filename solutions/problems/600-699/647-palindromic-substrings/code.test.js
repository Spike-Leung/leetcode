const countSubstrings = require("./code")

const s = "abc"
const count = 3
test(`There are ${count} substring in ${s}`, () => {
  expect(countSubstrings(s)).toBe(count)
})

const s1 = "aaa"
const count1 = 6
test(`There are ${count1} substring in ${s1}`, () => {
  expect(countSubstrings(s1)).toBe(count1)
})
