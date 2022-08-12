// https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const res = []

  const queue = [root]

  while (queue.length) {
    const node = queue.shift()

    if (node === null) {
      res.push("X")
    } else {
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  return res.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === "X") return null

  const list = data.split(",")
  const root = new TreeNode(list[0])
  let cursor = 1
  const queue = [root]

  while (cursor < list.length) {
    const node = queue.shift()

    const leftVal = list[cursor]
    const rightVal = list[cursor + 1]

    if (leftVal !== "X") {
      node.left = new TreeNode(leftVal)
      queue.push(node.left)
    }

    if (rightVal !== "X") {
      node.right = new TreeNode(rightVal)
      queue.push(node.right)
    }

    cursor += 2
  }

  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
