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
      // 每次遍历，j 都变化，对应的 product[i] 也会变化，比较时也要比较之前计算的 product[i]
      product[i] = Math.max(product[i], j * (i - j), j * product[i - j]);
    }
  }

  return product[n];
};

module.exports = cuttingRope;
