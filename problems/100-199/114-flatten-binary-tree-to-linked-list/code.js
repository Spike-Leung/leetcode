// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let curr = root;

  while (curr) {
    // if has left subtree, find right most leaf node, link to curr.right
    if (curr.left) {
      const left = curr.left;
      let predecessor = left;

      // find right most leaf
      while (predecessor.right) {
        predecessor = predecessor.right;
      }

      // link right most leaf to curr.right
      predecessor.right = curr.right;
      // now we can change curr.right
      curr.right = left;
      curr.left = null;
    }

    // precess next node
    curr = curr.right;
  }
};
module.exports = flatten;
