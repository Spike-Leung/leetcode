// https://leetcode.cn/problems/coin-change/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const memo = []

  function bfs(amount) {
    if (amount === 0) {
      return 0
    }

    if (amount < 0) {
      return -1
    }

    if (memo[amount]) {
      return memo[amount]
    }

    // 求最小值，初始化为最大值进行比较
    let res = Number.MAX_VALUE
    for (const coin of coins) {
      // 尝试所有的硬币，得到使用某个硬币，需要多少个才能凑到当前 amount
      const result = bfs(amount - coin)

      // 如果能凑出来
      if (result !== -1) {
        // 取这几个硬币中，需要次数最小的
        res = Math.min(res, 1 + result)
      }
    }

    // 如果存在一个组合能凑出当前 amount，则缓存起来，避免重复计算这个 amount
    // 如果不存在，则返回 -1
    memo[amount] = res === Number.MAX_VALUE ? -1 : res
    return memo[amount]
  }

  return bfs(amount)
};
module.exports = coinChange
