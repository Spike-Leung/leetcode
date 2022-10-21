// https://leetcode.cn/problems/online-stock-span/
var StockSpanner = function() {
  this.stack = []
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let spanSum = 1

  while (this.stack.length && this.stack[this.stack.length - 1].price <= price) {
    const { span } = this.stack.pop()
    spanSum += span
  }

  this.stack.push({ price, span: spanSum })

  return spanSum
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
module.exports = StockSpanner
