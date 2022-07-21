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
  this.index = 0

  const inorder = []

  if (root !== null) {
    (function dfs(root) {
      if (!root) {
       return
      }

      root.left && dfs(root.left)
      inorder.push(root.val)
      root.right && dfs(root.right)
    }(root))
  }

  this.inorder = inorder
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.inorder[this.index++]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.inorder[this.index] !== undefined
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
module.exports = BSTIterator
