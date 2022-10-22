// https://leetcode.cn/problems/merge-strings-alternately/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let res = []
  const n1 = word1.length
  const n2 = word2.length

  let i = 0

  while (i < n1 && i < n2) {
    res.push(word1[i])
    res.push(word2[i])
    i++
  }

  if (i < n1) {
    res.push(word1.slice(i))
  }

  if (i < n2) {
    res.push(word2.slice(i))
  }

  return res.join("")
};
module.exports = mergeAlternately
