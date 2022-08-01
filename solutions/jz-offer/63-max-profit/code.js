/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp = [0, 1];
  let maxProfit = 0;
  let prevMinimumPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, (prices[i] - prevMinimumPrice));
    prevMinimumPrice = Math.min(prevMinimumPrice, prices[i]);
  }

  return maxProfit;
};

module.exports = maxProfit;
