// https://leetcode.cn/problems/path-sum-ii/
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  let res = [];

  if (root === null) {
    return [];
  }

  (function dfs(root, accSum, logArr) {
    accSum += root.val;
    logArr = [...logArr, root.val];

    if (root.left === null && root.right === null) {
      accSum === targetSum && res.push(logArr);
      return;
    }

    root.left && dfs(root.left, accSum, logArr);
    root.right && dfs(root.right, accSum, logArr);
  }(root, 0, []));

  return res;
};

module.exports = pathSum;
