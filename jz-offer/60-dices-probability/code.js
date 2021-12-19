/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function(n) {
  let dp = [];
  let MAXIMUN_DICE = 6;

  // 初始化一个色子的情况
  for (let i = 0; i < MAXIMUN_DICE; i++) {
    dp[i] = 1 / MAXIMUN_DICE;
  }

  // 累计 n 个色子的概率
  for (let diceCount = 2; diceCount <= n; diceCount++) {
    // 初始化当前 diceCount 个色子时，和的数组
    const sumCount = (MAXIMUN_DICE * diceCount) - diceCount + 1;
    let tmp = Array.from({ length: sumCount }).fill(0);

    // 对于 n - 1 个色子，计算增加一个色子后，对 n 个色子的结果产生的影响
    for (let i = 0; i < dp.length; i++) {
      for (let j = 0; j < MAXIMUN_DICE; j++) {
        tmp[i + j] += dp[i] / 6;
      }
    }

    dp = tmp;
  }

  return dp;
};

module.exports = dicesProbability;
