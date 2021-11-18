/**
 *
 * https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  return match(s, p, s.length, p.length, 0, 0);
};

function match(s, p, sLength, pLength, sIndex, pIndex) {
  if (sIndex >= sLength && pIndex >= pLength) {
    return true;
  }

  if (sIndex < sLength && pIndex >= pLength) {
    return false;
  }

  if (p[pIndex + 1] === "*") {
    if (p[pIndex] === s[sIndex] || (p[pIndex] === "." && sIndex < sLength)) {
      return match(s, p, sLength, pLength, sIndex + 1, pIndex) ||
        match(s, p, sLength, pLength, sIndex, pIndex + 2) ||
        match(s, p, sLength, pLength, sIndex + 1, pIndex + 2);
    } else {
      return match(s, p, sLength, pLength, sIndex, pIndex + 2);
    }
  }

  if (s[sIndex] === p[pIndex] || (p[pIndex] === "." && sIndex < sLength)) {
    return match(s, p, sLength, pLength, sIndex + 1, pIndex + 1);
  }

  return false;
}

module.exports = isMatch;
