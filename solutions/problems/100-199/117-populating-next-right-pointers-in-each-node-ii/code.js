// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root === null) {
    return root
  }

  // 当前遍历的节点
  let curr = root

  // 从上到下遍历每一层
  while (curr !== null) {
    const dummy = new Node()
    let pre = dummy

    // 从左到右便利每一层，把一层看作是一个链表
    while (curr !== null) {
      if (curr.left !== null) {
        pre.next = curr.left
        pre = pre.next
      }

      if (curr.right !== null) {
        pre.next = curr.right
        pre = pre.next
      }

      curr = curr.next
    }

    curr = dummy.next
  }

  return root
};
module.exports = connect
