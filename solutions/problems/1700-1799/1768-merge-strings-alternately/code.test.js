const mergeAlternately = require("./code")

const word1 = "ab", word2 = "pqrs"
const res = "apbqrs"
test(`Merge ${word1} and ${word2} should be ${res}`, () => {
  expect(mergeAlternately(word1, word2)).toBe(res)
})
