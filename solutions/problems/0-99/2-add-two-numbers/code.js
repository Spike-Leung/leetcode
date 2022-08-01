/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head,tail;
  let l1Pointer = l1;
  let l2Pointer = l2;
  let carry = 0;

  while (l1Pointer || l2Pointer) {
    let l1Val = l1Pointer ? l1Pointer.val : 0;
    let l2Val = l2Pointer ? l2Pointer.val : 0;
    let sum = l1Val + l2Val + carry;

    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }

    carry = Math.floor(sum / 10);

    if (l1Pointer) {
      l1Pointer = l1Pointer.next;
    }

    if (l2Pointer) {
      l2Pointer = l2Pointer.next;
    }
  }

  if (carry > 0) {
    tail.next = new ListNode(carry);
  }

  return head;
};
