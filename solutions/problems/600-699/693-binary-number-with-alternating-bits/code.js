// https://leetcode-cn.com/problems/binary-number-with-alternating-bits/
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  const s = Number.prototype.toString.call(n, 2);

  for (let i = 0; i < s.length - 1; i++) {
    if (+s[i] ^ (+s[i + 1] === 1)) {
      continue;
    }

    return false;
  }

  return true;
};
module.exports = hasAlternatingBits;
