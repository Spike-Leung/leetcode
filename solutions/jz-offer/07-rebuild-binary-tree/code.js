/**
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 *
 * Definition for a binary tree node.
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);
  const leftPreorder = preorder.slice(1, rootIndex + 1);
  const leftInorder = inorder.slice(0, rootIndex);
  const rightPreorder = preorder.slice(rootIndex + 1);
  const rightInorder = inorder.slice(rootIndex + 1);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = buildTree;
