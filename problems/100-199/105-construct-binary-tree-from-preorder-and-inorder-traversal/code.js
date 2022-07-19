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

  const n = inorder.length
  const index = {}

  inorder.forEach((v, i) => {
    index[v] = i
  })

  function build(preorder, inorder, preStart, preEnd, inStart, inEnd) {
    if (inStart > inEnd) {
      return null
    }

    const rootVal = preorder[preStart]
    const root = new TreeNode(rootVal)
    const rootIndex = index[rootVal]
    const leftSize = rootIndex - inStart

    root.left = build(
      preorder,
      inorder,
      preStart + 1,
      preStart + leftSize,
      inStart,
      rootIndex - 1
    )
    root.right = build(
      preorder,
      inorder,
      preStart + 1 + leftSize,
      preEnd,
      rootIndex + 1,
      inEnd
    )

    return root
  }

  return build(preorder, inorder, 0, n - 1, 0, n - 1)
}

module.exports = buildTree
