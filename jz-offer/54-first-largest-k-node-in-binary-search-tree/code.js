/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let res;

  (function traverse(root) {
    if (!root) {
      return;
    }

    traverse(root.right);

    if (k === 0) {
      return;
    }

    if (--k === 0) {
      res = root.val;
    }

    traverse(root.left);
  })(root);

  return res;
};
