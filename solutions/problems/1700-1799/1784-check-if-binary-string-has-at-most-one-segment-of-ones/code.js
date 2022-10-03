// https://leetcode.cn/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
  const n = s.length
  let l = 0, r = n - 1

  while (r > 0 && s[r] === "0") {
    r--
  }

  if (r === 0) {
    return true
  }

  while (l < r && s[l] === "1") {
    l++
  }

  return l === r
};
module.exports = checkOnesSegment
