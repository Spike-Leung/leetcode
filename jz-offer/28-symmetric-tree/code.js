/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  return compare(root.left, root.right);
};

function compare(left, right) {
  // 没有左右节点是对称的
  if (!left && !right) {
    return true;
  }

  // 只有一个左节点或者只有一个右节点，是不对称的
  if ((left && !right) || (!left && right)) {
    return false;
  }

  // 如果左右节点的值相同，递归判断子节点是否也对称
  if (left.val === right.val) {
    return compare(left.left, right.right) && compare(left.right, right.left);
  }

  // 左右节点值不同，返回 false
  return false;
}

module.exports = isSymmetric;
