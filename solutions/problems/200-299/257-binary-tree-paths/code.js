// https://leetcode.cn/problems/binary-tree-paths/
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const paths = []

  function dfs(root, prePath = "") {
    const path = prePath ? `${prePath}->${root.val}` : `${root.val}`

    if (root.left === null && root.right === null) {
      paths.push(path)
      return
    }

    root.left && dfs(root.left, path)
    root.right && dfs(root.right, path)
  }

  dfs(root)

  return paths
};
module.exports = binaryTreePaths
