/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let headAPointer = headA;
  let headBPointer = headB;

  while (headAPointer !== headBPointer) {
    headAPointer = headAPointer ? headAPointer.next : headB;
    headBPointer = headBPointer ? headBPointer.next : headA;
  }

  return headAPointer;
};
