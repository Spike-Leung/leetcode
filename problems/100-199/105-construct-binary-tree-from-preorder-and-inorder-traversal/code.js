// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }

  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)
  const rootIndex = inorder.indexOf(rootVal)
  const leftInorder = inorder.slice(0, rootIndex)
  const leftInorderLength = leftInorder.length

  root.left = buildTree(preorder.slice(1, leftInorderLength + 1), leftInorder)
  root.right = buildTree(
    preorder.slice(leftInorderLength + 1),
    inorder.slice(rootIndex + 1)
  )

  return root
}

module.exports = buildTree
