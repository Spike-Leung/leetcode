// https://leetcode.cn/problems/binary-search-tree-iterator/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = []
  this.curr = root
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let val

  while (this.curr) {
    this.stack.push(this.curr)
    this.curr = this.curr.left
  }

  const node = this.stack.pop()
  val = node.val
  this.curr = node.right

  return val
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length || this.curr !== null
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
module.exports = BSTIterator
