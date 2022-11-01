const arrayStringsAreEqual = require("./code")

const word1 = ["ab", "c"]
const word2 = ["a", "bc"]
test(`${word1} and ${word2} are equal`, () => {
  expect(arrayStringsAreEqual(word1, word2)).toBe(true)
})

const word3 = ["ab", "c"]
const word4 = ["a", "cb"]
test(`${word3} and ${word4} are NOT equal`, () => {
  expect(arrayStringsAreEqual(word3, word4)).toBe(false)
})
