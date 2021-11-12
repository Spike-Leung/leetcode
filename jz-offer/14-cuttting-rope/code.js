/**
 *
 * https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
 *
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const product = [];

  product[0] = 0;
  product[1] = 1;
  product[2] = 1;
  product[3] = 2;

  for (let i = 4; i <= n; i++) {
    const half = Math.floor(i / 2);

    product[i] = 0;

    for (j = 1; j <= half; j++) {
      product[i] = Math.max(product[i], j * (i - j), j * product[i - j]);
    }
  }

  return product[n];
};

module.exports = cuttingRope;
