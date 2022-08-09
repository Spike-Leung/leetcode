// https://leetcode.cn/problems/count-complete-tree-nodes/
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
var countNodes = function(root) {
  if (root === null) {
    return 0
  }

  const level = calcLevel(root)
  let left = 1;
  let right = (1 << (level - 1))

  while (left <= right) {
    const mid = left + ((right - left) >> 1)

    if (isExist(root, level, mid)) {
      // 存在，则看看右边还有没有更多节点
      left = mid + 1
    } else {
      // 不存在则往左边找
      right = mid - 1
    }
  }

  return (1 << (level - 1)) - 1 + left - 1
};

function isExist(root, height, targetIndex) {
  let node = root

  while (height !== 1) {
    // 1 << N 即 Math.pow(2, N), N >> 1, 相当于 Math.floor(N / 2)
    const mid = ((1 << (height - 1)) >> 1)

    if (targetIndex > mid) {
      node = node.right
      targetIndex -= mid
    } else {
      node = node.left
    }

    height -= 1
  }

  return node !== null
}

function calcLevel(root) {
  let level = 0

  while (root !== null) {
    level++
    root = root.left
  }

  return level
}

module.exports = countNodes
