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
  const head = new ListNode();
  let headPointer = head;
  let l1Pointer = l1;
  let l2Pointer = l2;

  while (l1Pointer !== null && l2Pointer !== null) {
    let sum = l1Pointer.val + l2Pointer.val;


    headPointer.val += sum;

    if (headPointer.val >= 10) {
      headPointer.val %= 10;
      headPointer.next = new ListNode(1);
    }

    l1Pointer = l1Pointer.next;
    l2Pointer = l2Pointer.next;

    if (headPointer.next === null && (l1Pointer !== null || l2Pointer !== null)) {
      headPointer.next = new ListNode();
    }

    headPointer = headPointer.next;
  }

  let leftPointer = l1Pointer || l2Pointer || null;

  while (leftPointer !== null) {
    if (headPointer.next === null && leftPointer.next !== null) {
      headPointer.next = new ListNode();
    }

    headPointer.val += leftPointer.val;

    if (headPointer.val >= 10) {
      headPointer.val %= 10;
      headPointer.next = new ListNode(1);
    }

    leftPointer = leftPointer.next;
    headPointer = headPointer.next;
  }

  return head;
};
