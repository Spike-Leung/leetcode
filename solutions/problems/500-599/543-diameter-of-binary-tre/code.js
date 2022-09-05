// https://leetcode.cn/problems/diameter-of-binary-tree
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (root === null) {
    return 0
  }

  let diameter = 0

  function depth(root) {
    if (root === null) {
      return 0
    }

    // 计算左子树和右子树的高度
    const left = depth(root.left)
    const right = depth(root.right)

    // 周长为边的数量，统计每个节点的周长，取最大值
    // 节点的周长即左右节点的深度之和（通过画图可以发现规律）
    diameter = Math.max(diameter, left + right)

    // 返回当前节点的高度
    return Math.max(left, right) + 1
  }

  depth(root)

  return diameter
};

module.exports = diameterOfBinaryTree
