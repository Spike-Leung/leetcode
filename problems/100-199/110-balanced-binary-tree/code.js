// https://leetcode-cn.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
// 自定向下
var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  // 计算高度
  function dfs(root) {
    if (!root) {
      return 0;
    }

    if (!root.left && !root.right) {
      return 1;
    }

    return 1 + Math.max(dfs(root.left), dfs(root.right));
  }

  // 根节点和左右子节点都是平衡二叉树才返回 true
  return (
    Math.abs(dfs(root.left) - dfs(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

// 自底向上
const isBalanced2 = function (root) {
  function height(root) {
    if (!root) {
      return 0;
    }

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  return dfs(root) >= 0;
};
