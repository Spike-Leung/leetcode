// https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (root === null) {
    return [];
  }

  const res = [];
  let toLeft = true;
  let nodes = [root];

  while (nodes.length) {
    const nextLevelNodes = [];
    const currLevelRes = [];

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      currLevelRes.push(node.val);

      if (toLeft) {
        node.left && nextLevelNodes.unshift(node.left);
        node.right && nextLevelNodes.unshift(node.right);
      } else {
        node.right && nextLevelNodes.unshift(node.right);
        node.left && nextLevelNodes.unshift(node.left);
      }
    }

    toLeft = !toLeft;
    res.push(currLevelRes);
    nodes = nextLevelNodes;
  }

  return res;
};
module.exports = zigzagLevelOrder;
