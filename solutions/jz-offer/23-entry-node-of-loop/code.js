/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// https://leetcode-cn.com/problems/c32eOV/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  const meetingNode = findMeetingNode(head);

  if (!meetingNode) {
    return null;
  }

  // 获取环的节点个数
  let cycleNodeCount = 1;
  let cycleNode = meetingNode.next;

  while (cycleNode !== meetingNode) {
    cycleNodeCount++;
    cycleNode = cycleNode.next;
  }

  let slow = head;
  let fast = head;

  while (cycleNodeCount > 0) {
    fast = fast.next;
    cycleNodeCount--;
  }

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
};

// 找到环内的相遇点
function findMeetingNode(head) {
  if (!head) {
    return null;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast !== slow) {
    slow = slow.next;
    fast = fast.next;

    if (fast) {
      fast = fast.next;
    }
  }

  if (!fast) {
    return null;
  }

  return fast;
}

module.exports = detectCycle;
