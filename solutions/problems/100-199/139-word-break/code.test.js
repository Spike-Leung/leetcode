const wordBreak = require("./code")

const s = "leetcode"
const wordDict = ["leet", "code"]
test(`${s} can combined with ${wordDict}`, () => {
  expect(wordBreak(s, wordDict)).toBe(true)
})

const s1 = "applepenapple"
const wordDict1 = ["apple", "pen"]
test(`${s1} can combined with ${wordDict1}`, () => {
  expect(wordBreak(s1, wordDict1)).toBe(true)
})

const s2 = "catsandog"
const wordDict2 = ["cats", "dog", "sand", "and", "cat"]
test(`${s2} can NOT combined with ${wordDict2}`, () => {
  expect(wordBreak(s2, wordDict2)).toBe(false)
})

const s3 = "cars"
const wordDict3 = ["car","ca","rs"]
test(`${s3} can combined with ${wordDict3}`, () => {
  expect(wordBreak(s3, wordDict3)).toBe(true)
})

const s4 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
const wordDict4 = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
test(`${s4} can NOT combined with ${wordDict4}`, () => {
  expect(wordBreak(s4, wordDict4)).toBe(false)
})
