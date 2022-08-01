// https://leetcode-cn.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if ((p && !q) || (!p && q)) {
    return false;
  }

  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  } else if (p.val !== q.val) {
    return fasle;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
