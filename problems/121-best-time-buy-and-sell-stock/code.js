/**
 * 121. Best Time to Buy and Sell Stock
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const minBuyIn = [];

  prices.forEach((p, index) => {
    if (index === 0) {
      minBuyIn[index] = prices[0];
      return;
    }

    minBuyIn[index] = Math.min(p, minBuyIn[index - 1]);
  });

  return Math.max(...prices.map((p, index) => p - minBuyIn[index]), 0);
};

module.exports = maxProfit;
