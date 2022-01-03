// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  let first = head;
  let second = first.next;
  let prev = null;

  head = second;

  while (second !== null) {
    first.next = second.next;
    second.next = first;
    prev = first;

    first = first.next;
    second = first !== null ? first.next : null;
    second !== null && (prev.next = second);
  }

  return head;
};
