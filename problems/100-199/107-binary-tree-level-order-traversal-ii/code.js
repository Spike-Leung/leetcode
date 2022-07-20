// https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const res = [];

  if (root === null) {
   return res
  }

  let currLevel = [root]

  while (currLevel.length !== 0) {
    const nextLevel = []
    const currRes = []

    for (const node of currLevel) {
      currRes.push(node.val)

      node.left && (nextLevel.push(node.left))
      node.right && (nextLevel.push(node.right))
    }

    res.unshift(currRes)
    currLevel = nextLevel
  }

  return res
};
module.exports = levelOrderBottom
