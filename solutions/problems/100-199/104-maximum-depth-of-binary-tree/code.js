/**
 * 104. Maximum Depth of Binary Tree
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 *
 * 1. 深度优先搜索
 * 2. 广度优先搜索
 */

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
var maxDepth = function (root) {
  return maxDepthDFS(root);
};

function maxDepthDFS(root) {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
