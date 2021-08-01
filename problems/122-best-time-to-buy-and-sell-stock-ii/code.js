/**
 * 122. Best Time to Buy and Sell Stock II
 *
 * http://portal.dclingcloud.com:8061/dokuwiki/doku.php?id=%E4%B8%8A%E6%B5%B7%E7%A0%94%E5%8F%91:weekly_status
 *
 * 画图可以知，就是求所有上涨阶段的差值的和
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  const length = prices.length;
  let buy = prices[0];
  let sell = null;
  let i = 1;

  while (i < length) {
    let price = prices[i];

    // 卖出价格存在
    if (sell !== null) {
      // 当前价格大于卖出价格，说明还在上涨，继续持用
      // 当前价格小于卖出价格，说明开始下跌了，先卖了，再从下跌的点开始重新持用
      price > sell
        ? (sell = price)
        : ((profit += sell - buy), (buy = price), (sell = null));
    } else {
      // 如果从来没有卖出，就找一个比买入价格高的点作为卖出价格，如果一致都是下跌，则设置买入的时间为跌的最惨的价格
      price > buy ? (sell = price) : (buy = price);
    }

    i++;
  }

  // 处理一值涨，直到涨停的情况
  if (sell !== null) {
    profit += Math.max(0, sell - buy);
  }

  return profit;
};

module.exports = maxProfit;
