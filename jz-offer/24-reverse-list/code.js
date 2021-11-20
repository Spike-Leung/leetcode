/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  let prev = head;
  let node = head.next;

  prev.next = null;

  while (node.next) {
    const next = node.next;

    node.next = prev;
    prev = node;
    node = next;
  }

  node.next = prev;

  return node;
};

module.exports = reverseList;
