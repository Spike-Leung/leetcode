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

  let nodeValues = [];

  while (head) {
    nodeValues.push(head.val);
    head = head.next;
  }

  return buildBST(nodeValues);
};

function buildBST(arr) {
  if (arr.length === 0) {
    return null;
  }

  const midIndex = Math.floor((arr.length - 1) / 2);
  const midVal = arr[midIndex];
  const root = new TreeNode(midVal);

  root.left = buildBST(arr.slice(0, midIndex));
  root.right = buildBST(arr.slice(midIndex + 1));

  return root;
}

module.exports = sortedListToBST;
