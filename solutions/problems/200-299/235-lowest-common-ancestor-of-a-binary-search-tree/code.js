// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let ancestor = root

  while (true) {
    if (ancestor.val > p.val && ancestor.val > q.val) {
      ancestor = ancestor.left
    } else if (ancestor.val < p.val && ancestor.val < q.val) {
      ancestor = ancestor.right
    } else {
      break
    }
  }

  return ancestor
};
module.exports = lowestCommonAncestor
