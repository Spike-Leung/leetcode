const countMatches = require("./code")

const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
const ruleKey = "type"
const ruleValue = "phone"
const count = 2
test(`Match counts with items: ${items}, ruleKey: ${ruleKey}, ruleValue: ${ruleValue} is ${2}`, () => {
  expect(countMatches(items, ruleKey, ruleValue)).toBe(count)
})
