/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const result = [];
  const stack = [];

  if (!root) {
    return [];
  }

  findPath({
    root,
    stack,
    result,
    target,
    sum: 0,
  });

  return result;
};

function findPath({ root, stack, target, sum, result }) {
  stack.push(root.val);
  sum += root.val;

  const isLeaf = root.left === null && root.right === null;

  if (isLeaf && sum === target) {
    result.push(stack.slice(0));
  }

  if (root.left) {
    findPath({
      root: root.left,
      stack,
      target,
      sum,
      result,
    });
  }

  if (root.right) {
    findPath({
      root: root.right,
      stack,
      target,
      sum,
      result,
    });
  }

  sum -= root.val;
  stack.pop(root.val);
}
