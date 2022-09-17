const maxLengthBetweenEqualCharacters = require("./code")

const str = "aa"
const len = 0
test(`Max length between equal char of ${str} is ${len}`, () => {
  expect(maxLengthBetweenEqualCharacters(str)).toBe(len)
})

const str1 = "cabbac"
const len1 = 4
test(`Max len1gth between equal char of ${str1} is ${len1}`, () => {
  expect(maxLengthBetweenEqualCharacters(str1)).toBe(len1)
})

const str2 = "cbzxy"
const len2 = -1
test(`Max len2gth between equal char of ${str2} is ${len2}`, () => {
  expect(maxLengthBetweenEqualCharacters(str2)).toBe(len2)
})
