// https://leetcode-cn.com/problems/reverse-linked-list/
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
var reverseList = function (head) {
  if (!head) {
    return head;
  }

  let next = head.next;
  head.next = null;

  let prev = head;

  while (next) {
    const temp = next.next;
    next.next = prev;
    prev = next;
    next = temp;
  }

  return prev;
};
