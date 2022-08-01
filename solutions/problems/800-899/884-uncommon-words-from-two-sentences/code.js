// https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const sArr = [...s1.split(" "), ...s2.split(" ")];
  const map = {};

  for (const s of sArr) {
    if (map[s] !== undefined) {
      map[s] = false;
      continue;
    }

    map[s] = true;
  }

  return Object.keys(map).filter((k) => map[k]);
};

module.exports = uncommonFromSentences;
