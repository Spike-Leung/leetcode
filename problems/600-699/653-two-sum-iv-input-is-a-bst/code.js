// https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (!root) {
    return false;
  }

  const arr = [];

  (function dfs(root) {
    if (!root) {
      return;
    }

    dfs(root.left);
    arr.push(root.val);
    dfs(root.right);
  })(root);

  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    const sum = arr[left] + arr[right];
    if (sum === k) {
      return true;
    }

    if (sum < k) {
      left++;
    }

    if (sum > k) {
      right--;
    }
  }

  return false;
};
