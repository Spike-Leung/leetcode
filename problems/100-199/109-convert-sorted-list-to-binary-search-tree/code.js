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
  const length = getLength(head);

  function buildBST(left, right) {
    if (left > right) {
      return null;
    }

    const mid = left + Math.floor((right - left) / 2);
    const root = new TreeNode();

    root.left = buildBST(left, mid - 1);
    root.val = head.val;
    head = head.next;
    root.right = buildBST(mid + 1, right);

    return root;
  }

  return buildBST(0, length - 1);
};

function getLength(head) {
  let length = 0;

  while (head) {
    length++;
    head = head.next;
  }

  return length;
}

module.exports = sortedListToBST;
