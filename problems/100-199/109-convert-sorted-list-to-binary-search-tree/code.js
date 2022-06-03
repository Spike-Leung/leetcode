// https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (head === null) {
    return null;
  }

  return buildBST(head);
};

function buildBST(left, right = null) {
  if (left === right) {
    return null;
  }

  const midNode = getMidNode(left, right);
  const root = new TreeNode(midNode.val);
  root.left = buildBST(left, midNode);
  root.right = buildBST(midNode.next, right);

  return root;
}

function getMidNode(left, right) {
  let slow = left;
  let fast = left;

  while (fast !== right &&  fast.next !== right) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

module.exports = sortedListToBST;
