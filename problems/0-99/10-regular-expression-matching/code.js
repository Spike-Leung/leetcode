/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  return match(s, p, 0, 0, s.length, p.length);
};

function match(s, p, sIndex, pIndex, sLength, pLength) {
  // s 和 p 都遍历完则匹配
  if (sIndex >= sLength && pIndex >= pLength) {
    return true;
  }

  if (sIndex < sLength && pIndex >= pLength) {
    return false;
  }

  if (p[pIndex + 1] === "*") {
    if (p[pIndex] === s[sIndex] || (p[pIndex] === "." && sIndex < sLength)) {
      return match(s, p, sIndex, pIndex + 2, sLength, pLength)
        || match(s, p, sIndex + 1, pIndex + 2, sLength, pLength)
        || match(s, p, sIndex + 1, pIndex, sLength, pLength);
    } else {
      return match(s, p, sIndex, pIndex + 2, sLength, pLength);
    }
  }

  if (p[pIndex] === s[sIndex] || (p[pIndex] === "." && sIndex < sLength)) {
    return match(s, p, sIndex + 1, pIndex + 1, sLength, pLength);
  }

  return false;
}

module.exports = isMatch;
