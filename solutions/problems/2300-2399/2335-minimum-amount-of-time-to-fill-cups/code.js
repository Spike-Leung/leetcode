// https://leetcode.cn/problems/minimum-amount-of-time-to-fill-cups/
/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
  let steps = 0
  amount.sort((a, b) => b - a)

  while (amount[0] > 0) {
    amount[0] > 0 && amount[0]--
    amount[1] > 0 && amount[1]--
    amount.sort((a, b) => b - a)
    steps++
  }

  return steps
};
module.exports = fillCups
