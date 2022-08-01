/**
 *
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 *
 *Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let beforePointer = head;
  let afterPointer = head;

  if (head === null || k === 0) {
    return null;
  }

  for (let i = 0; i < k - 1; i++) {
    if (afterPointer.next !== null) {
      afterPointer = afterPointer.next;
    } else {
      return null;
    }
  }

  while (afterPointer.next !== null) {
    beforePointer = beforePointer.next;
    afterPointer = afterPointer.next;
  }

  return beforePointer;
};
