const maxUniqueSplit = require("./code")

const str = "ababccc"
const count = 5
test(`Max Unique Split count of ${str} is ${count}`, () => {
  expect(maxUniqueSplit(str)).toBe(count)
})

const str1 = "aba"
const count1 = 2
test(`Max Unique Split count of ${str1} is ${count1}`, () => {
  expect(maxUniqueSplit(str1)).toBe(count1)
})
