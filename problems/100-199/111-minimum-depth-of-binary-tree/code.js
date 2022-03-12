// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0;
  }

  let depth = 1;
  let queue = [];

  root.left && queue.push(queue.left);
  root.right && queue.push(queue.right);

  while (queue.length) {
    const next = [];

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      // 如果是叶子节点，则直接返回高度
      if (!node.left && !node.right) {
        return depth + 1;
      }

      node.left && next.push(node.left);
      node.right && next.push(node.right);
    }

    queue = next;
    depth++;
  }

  return depth;
};
