/**
 * 122. Best Time to Buy and Sell Stock II
 *
 * http://portal.dclingcloud.com:8061/dokuwiki/doku.php?id=%E4%B8%8A%E6%B5%B7%E7%A0%94%E5%8F%91:weekly_status
 *
 * 动态规划
 *
 * Solution: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-ii-by-leetcode-s/
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp0 = 0;
  let dp1 = -[prices[0]];

  for (let i = 1; i < prices.length; i++) {
    const newDp0 = Math.max(dp0, dp1 + prices[i]);
    const newDp1 = Math.max(dp1, dp0 - prices[i]);
    dp0 = newDp0;
    dp1 = newDp1;
  }

  return dp0;
};

module.exports = maxProfit;
