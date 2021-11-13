/**
 *
 * https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/
 *
 *
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  let product = 1;

  if (n === 2) {
    return 1;
  }

  if (n === 3) {
    return 2;
  }

  if (n === 4) {
    return 4;
  }

  while (n > 4) {
    product *= 3;
    product %= (1e9 + 7);
    n -= 3;
  }

  product *= n;

  return product % (1e9 + 7);
};

module.exports = cuttingRope;
