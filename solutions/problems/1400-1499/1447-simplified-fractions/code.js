// https://leetcode-cn.com/problems/simplified-fractions/
/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
    const res = [];

    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (gcd(i, j) === 1) {
                res.push(`${i}/${j}`);
            }
        }
    }

    return res;
};

function gcd(a, b) {
  if (a === b) {
    return a;
  }

  if (b > a) {
    return gcd(b, a);
  }

  if (!(a & 1) && !(b & 1)) {
    return gcd(a >> 1, b >> 1) << 1;
  }

  if (!(a & 1) && (b & 1)) {
    return gcd(a >> 1, b);
  }

  if ((a & 1) && !(b & 1)) {
    return gcd(a, b >> 1);
  }

  return gcd(b, a - b);
}

module.exports = simplifiedFractions;
