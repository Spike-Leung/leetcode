// https://leetcode.cn/problems/first-letter-to-appear-twice/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  const map = {}

  for (let c of s) {
    if (map[c]) {
      return c
    }

    map[c] = c
  }
};
module.exports = repeatedCharacter
