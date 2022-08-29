// https://leetcode.cn/problems/linked-list-cycle-ii/
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
var detectCycle = function(head) {
  if (head === null) {
    return null
  }
  let fast = head
  let slow = head

  while (fast && slow && fast.next) {
    // slow 走一步 fast 走两步
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      fast = head

      // 相遇的时候，fast = head，一起每次走一步，直到再次相遇
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }

      return slow
    }
  }

  return null
};
module.exports = detectCycle
