// https://leetcode.cn/problems/house-robber-iii/
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
var rob = function (root) {
  let steal = new Map()
  let notSteal = new Map()

  function dfs(node) {
    if (node === null) {
      return
    }

    dfs(node.left)
    dfs(node.right)

    const stealLeft = steal.get(node.left) || 0
    const notStealLeft = notSteal.get(node.left) || 0
    const stealRight = steal.get(node.right) || 0
    const notStealRight = notSteal.get(node.right) || 0

    steal.set(node, node.val + notStealLeft + notStealRight)
    notSteal.set(
      node,
      Math.max(stealLeft, notStealLeft) + Math.max(stealRight, notStealRight)
    )
  }

  dfs(root)

  return Math.max(steal.get(root) || 0, notSteal.get(root) || 0)
}
module.exports = rob
