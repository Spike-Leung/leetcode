// https://leetcode.cn/problems/count-items-matching-a-rule/
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  const keyIndex = ruleKey === "type" ? 0 : (ruleKey === "color" ? 1 : 2)

  return items.filter((item) => item[keyIndex] === ruleValue).length
};
module.exports = countMatches
