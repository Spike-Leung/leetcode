const groupAnagrams = require("./code")

const strs = [""]
const res = [[""]]
test(`GroupAnagrams of ${strs} should be ${res}`, () => {
  expect(groupAnagrams(strs)).toEqual(res)
})

const strs1 = [""]
const res1 = [[""]]
test(`GroupAnagrams of ${strs1} should be ${res1}`, () => {
  expect(groupAnagrams(strs1)).toEqual(res1)
})

const strs2 = ["a", "b"]
const res2 = [["a"], ["b"]]
test(`GroupAnagrams of ${strs2} should be ${res2}`, () => {
  expect(groupAnagrams(strs2)).toEqual(res2)
})
