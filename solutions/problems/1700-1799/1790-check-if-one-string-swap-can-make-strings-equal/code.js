// https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) {
    return true
  }

  const n = s1.length
  const diffIndexes = []

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      diffIndexes.push(i)
    }

    if (diffIndexes.length > 2) {
      return false
    }
  }

  const [i1, i2] = diffIndexes

  return s1[i1] === s2[i2] && s1[i2] === s2[i1]
};
module.exports = areAlmostEqual
