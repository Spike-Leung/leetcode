// https://leetcode.cn/problems/convert-bst-to-greater-tree
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  if (!root) {
    return null
  }

  let sum = 0

  function convert(root) {
    if (!root) {
      return
    }

    root.right && convert(root.right)

    sum += root.val
    root.val = sum

    root.left && convert(root.left)
  }

  convert(root)

  return root
};


module.exports = convertBST
