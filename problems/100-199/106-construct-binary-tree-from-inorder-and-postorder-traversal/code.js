// https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) {
    return null
  }

  const n = inorder.length
  const index = {}

  inorder.forEach((v, i) => {
    index[v] = i
  })

  function build(inorder, postorder, inStart, inEnd, postStart, postEnd) {
    if (inStart > inEnd) {
      return null
    }

    const rootVal = postorder[postEnd]
    const rootIndex = index[rootVal]
    const leftSize = rootIndex - inStart
    const root = new TreeNode(rootVal)

    root.left = build(
      inorder,
      postorder,
      inStart,
      rootIndex - 1,
      postStart,
      postStart + leftSize - 1
    )
    root.right = build(
      inorder,
      postorder,
      rootIndex + 1,
      inEnd,
      postStart + leftSize,
      postEnd - 1
    )

    return root
  }

  return build(inorder, postorder, 0, n - 1, 0, n - 1)
}

module.exports = buildTree
