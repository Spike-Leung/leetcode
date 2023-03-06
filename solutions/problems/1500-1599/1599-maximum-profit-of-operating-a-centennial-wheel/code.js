// https://leetcode.cn/problems/maximum-profit-of-operating-a-centennial-wheel/
/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
  let round = 1
  let minProfitRound = 1
  let profit = 0
  let maxProfit = 0
  let peoples = customers[0]

  // 不管怎么运作，都不可能赚钱
  if (boardingCost * 4 < runningCost) {
    return -1
  }

  // 当还有顾客时，一直运作，记录其中的最大利润
  while (peoples > 0 || round <= customers.length) {
    // 每次最多乘坐 4 个人
    const count = peoples >= 4 ? 4 : peoples

    // 累积计算每一次得到的利润
    profit += (count * boardingCost - runningCost)

    // 如果利润超过最大利润，更新最大利润和最小轮转次数
    if (profit > maxProfit) {
      minProfitRound = round
      maxProfit = profit
    }

    // 更新轮次和剩余顾客数量
    round++
    peoples -= count
    round <= customers.length && (peoples += customers[round - 1])
  }

  // 如果最大利润是正的，则返回轮转次数
  return maxProfit <= 0 ? -1 : minProfitRound
};

module.exports = minOperationsMaxProfit
