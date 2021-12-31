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
  let length = 0;
  let pointer = head;

  if (head === null) {
      return head;
  }

  while (pointer) {
    length++;
    pointer = pointer.next;
  }

  if (length - n === 0) {
      head = head.next;
      return head;
  }

  pointer = head;
  let counter = 1;
  while (pointer && counter < (length - n)) {
    pointer = pointer.next;
    counter++;
  }

  pointer.next = pointer.next.next;

  return head;
};
