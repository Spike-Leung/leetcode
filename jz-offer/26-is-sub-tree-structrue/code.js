/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) {
    return false;
  }

  let result = false;

  if (A.val === B.val) {
    result = doesTree1HasTree2(A, B);
  }

  if (!result) {
    result = isSubStructure(A.left, B);
  }

  if (!result) {
    result = isSubStructure(A.right, B);
  }

  return result;
};

function doesTree1HasTree2(root1, root2) {
  if (!root2) {
    return true;
  }

  if (!root1) {
    return false;
  }

  if (root1.val !== root2.val) {
    return false;
  }

  return (
    doesTree1HasTree2(root1.left, root2.left) &&
    doesTree1HasTree2(root1.right, root2.right)
  );
}
