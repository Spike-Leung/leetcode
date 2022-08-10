// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
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
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const bst = new BST(root)

  return bst.kthSmallest(k)
}

function BST(root) {
  this.root = root
  this.nodeCountMap = new Map()
  this.countNodes(root)
}

BST.prototype.countNodes = function (node) {
  if (node === null) {
    return 0
  }

  this.nodeCountMap.set(
    node,
    1 + this.countNodes(node.left) + this.countNodes(node.right)
  )

  return this.nodeCountMap.get(node)
}

BST.prototype.getNodeCount = function (node) {
  return this.nodeCountMap.get(node) || 0
}

BST.prototype.kthSmallest = function (k) {
  let node = this.root

  while (node !== null) {
    const left = this.getNodeCount(node.left)

    if (left === k - 1) {
      break
    } else if (left < k - 1) {
      node = node.right
      k = k - left - 1
    } else if (left > k - 1) {
      node = node.left
    }
  }

  return node.val
}

module.exports = kthSmallest
