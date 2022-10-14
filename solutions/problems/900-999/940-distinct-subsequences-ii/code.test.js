const distinctSubseqII = require("./code")

const str = "abc"
const count = 7
test(`There are ${count} distinct subseq in ${str}`, () => {
  expect(distinctSubseqII(str)).toBe(count)
})

const str1 = "aba"
const count1 = 6
test(`There are ${count1} distinct subseq in ${str1}`, () => {
  expect(distinctSubseqII(str1)).toBe(count1)
})
