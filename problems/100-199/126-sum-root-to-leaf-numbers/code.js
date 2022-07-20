// https://leetcode.cn/problems/sum-root-to-leaf-numbers/
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
var sumNumbers = function (root) {
  if (root === null) {
    return 0
  }

  const nums = []
  ;(function getNumber(root, prevNumber) {
    if (root.left === null && root.right === null) {
      nums.push(prevNumber + root.val)
      return
    }

    root.left && getNumber(root.left, prevNumber + root.val)
    root.right && getNumber(root.right, prevNumber + root.val)
  })(root, "")

  return nums.reduce((acc, curr) => (acc += +curr), 0)
}
module.exports = sumNumbers
