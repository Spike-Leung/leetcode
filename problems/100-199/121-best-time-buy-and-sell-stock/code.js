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
  let currentMinBuy = 0;
  let prevMinBuy = 0;
  let maxProfit = 0;

  prices.forEach((p, index) => {
    if (index === 0) {
      prevMinBuy = prices[0];
      return;
    }

    currentMinBuy = Math.min(prices[index - 1], prevMinBuy);
    maxProfit = Math.max(maxProfit, p - currentMinBuy);
    prevMinBuy = currentMinBuy;
  });

  return maxProfit;
};

module.exports = maxProfit;
