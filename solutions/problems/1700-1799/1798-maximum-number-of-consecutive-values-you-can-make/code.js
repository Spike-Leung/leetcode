// https://leetcode.cn/problems/maximum-number-of-consecutive-values-you-can-make/
/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
  let count = 1

  coins.sort((a, b) => a - b)

  for (let coin of coins) {
    if (coin > count) {
      break
    }

    count += coin
  }

  return count
};
module.exports = getMaximumConsecutive
