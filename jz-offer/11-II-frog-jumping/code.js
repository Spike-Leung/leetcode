/**
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 *
 * 第一次走一步，则有 f(n-1) 种走法
 * 第一此走两步，则有 f(n-2) 种走法
 * 总共 f(n) = f(n-1) + f(n-2)
 *
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  let prev1 = 2;
  let prev2 = 1;

  for (let i = 3; i <= n; i++) {
    const temp = prev1;

    prev1 = (prev1 + prev2) % (1e9 + 7);
    prev2 = temp;
  }

  return prev1;
};

module.exports = numWays;
