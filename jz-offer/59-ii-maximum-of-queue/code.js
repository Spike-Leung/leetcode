// https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/
var MaxQueue = function() {
  this.queue = [];
  this.maxQueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.maxQueue.length === 0) {
    return -1;
  }

  return this.maxQueue[0];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value);

  while (this.maxQueue.length > 0 && this.maxQueue[this.maxQueue.length - 1] < value) {
    this.maxQueue.pop();
  }

  this.maxQueue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.queue.length === 0) {
    return -1;
  }

  const popValue = this.queue.shift();

  if (popValue === this.maxQueue[0]) {
    this.maxQueue.shift();
  }

  return popValue;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
