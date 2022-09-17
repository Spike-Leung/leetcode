// https://leetcode.cn/problems/largest-substring-between-two-equal-characters/
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  const map = {}
  let len = -1

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      len = Math.max(len, i - map[s[i]] - 1)
    } else {
      map[s[i]] = i
    }
  }

  return len
};
module.exports = maxLengthBetweenEqualCharacters
