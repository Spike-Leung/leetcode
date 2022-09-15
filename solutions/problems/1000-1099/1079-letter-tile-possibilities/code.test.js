const numTilePossibilities = require("./code")

const str = "AAB"
const count = 8
test(`Num Tile Possiblilities with ${str} is ${count}`, () => {
  expect(numTilePossibilities(str)).toBe(count)
})

const str1 = "AAABBC"
const count1 = 188
test(`Num Tile Possiblilities with ${str1} is ${count1}`, () => {
  expect(numTilePossibilities(str1)).toBe(count1)
})
