// https://leetcode-cn.com/problems/is-subsequence/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s && !t) {
    return true;
  }

  let l = 0;
  let r = 0;

  while (r < t.length) {
    if (t[r] === s[l]) {
      l++;
    }

    if (l >= s.length) {
      return true;
    }

    r++;
  }

  return false;
};
module.exports = isSubsequence;
