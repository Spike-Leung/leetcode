// https://leetcode.cn/problems/merge-two-binary-trees
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (root1 === null) {
    return root2
  }

  if (root2 === null) {
    return root1
  }

  let mergedRoot = new TreeNode(root1.val + root2.val)

  // 三个队列，分别维护合并的树，root1，root2，同时入栈出栈对应的元素进行处理
  const queue = [mergedRoot]
  const root1Queue = [root1]
  const root2Queue = [root2]

  while (root1Queue.length && root2Queue.length) {
    const mergeNode = queue.shift()
    const root1Node = root1Queue.shift()
    const root2Node = root2Queue.shift()

    const root1Left = root1Node.left
    const root2Left = root2Node.left

    const root1Right = root1Node.right
    const root2Right = root2Node.right

    if (root1Left || root2Left) {
      // 如果 root1，root2 的左节点都在，则合并，然后把三个左节点分别入栈
      if (root1Left && root2Left) {
        mergeNode.left = new TreeNode(root1Left.val + root2Left.val)
        queue.push(mergeNode.left)
        root1Queue.push(root1Left)
        root2Queue.push(root2Left)
      } else if (root1Left) {
        // 如果只有 root1Left 的左节点存在，则合并后的树，就取 root1Left
        mergeNode.left = root1Left
      } else {
        // 如果只有 root2Left 的左节点存在，则合并后的树，就取 root2Left
        mergeNode.left = root2Left
      }
    }

    if (root1Right || root2Right) {
      if (root1Right && root2Right) {
        mergeNode.right = new TreeNode(root1Right.val + root2Right.val)
        queue.push(mergeNode.right)
        root1Queue.push(root1Right)
        root2Queue.push(root2Right)
      } else if (root1Right) {
        mergeNode.right = root1Right
      } else {
        mergeNode.right = root2Right
      }
    }
  }

  return mergedRoot

};
module.exports = mergeTrees
