// https://leetcode-cn.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (slow !== null && fast !== null) {
    slow = slow.next;
    fast = fast.next && fast.next.next;

    if (slow !== null && slow === fast) {
      return true;
    }
  }

  return false;
};

module.exports = hasCycle;
