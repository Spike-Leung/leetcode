/**
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */
var CQueue = function() {
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stackIn.push(value);
  return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  const stackInLength = this.stackIn.length;
  const stackOutLength = this.stackOut.length;

  if (stackOutLength === 0 && stackInLength === 0) {
    return -1;
  }

  if (stackOutLength > 0) {
    return this.stackOut.pop();
  }

  while (this.stackIn.length > 0) {
    this.stackOut.push(this.stackIn.pop());
  }

  return this.stackOut.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
