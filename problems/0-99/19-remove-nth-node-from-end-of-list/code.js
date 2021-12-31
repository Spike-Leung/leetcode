/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0, head);

  let quick = head;
  let slow = dummy;

  for (let i = 0; i < n; i++) {
    quick = quick.next;
  }

  while (quick) {
    quick = quick.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
