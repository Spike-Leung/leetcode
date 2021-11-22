// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if (!root) {
    return null;
  }

  if (!root.left && !root.right) {
    return root;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  if (root.left) {
    mirrorTree(root.left);
  }

  if (root.right) {
    mirrorTree(root.right);
  }

  return root;
};

module.exports = mirrorTree;
