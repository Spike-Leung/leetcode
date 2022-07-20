// https://leetcode.cn/problems/sum-root-to-leaf-numbers/
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
var sumNumbers = function (root) {
  return dfs(root, 0)
}

function dfs(root, preSum) {
  if (root === null) {
    return 0
  }

  const sum = preSum * 10 + root.val

  // 已经是叶子节点了
  if (root.left === null && root.right === null) {
    return sum
  } else {
    return dfs(root.left, sum) + dfs(root.right, sum)
  }
}

module.exports = sumNumbers
