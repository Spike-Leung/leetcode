// https://leetcode.cn/problems/counting-words-with-a-given-prefix/
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  return words.filter((w) => w.indexOf(pref) === 0).length
};
module.exports = prefixCount
