/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let l3 = null;

  if (l1.val <= l2.val) {
    l3 = l1;
    l1 = l1.next;
  } else {
    l3 = l2;
    l2 = l2.next;
  }

  let head = l3;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      const next = l1.next;
      l3.next = l1;
      l3 = l3.next;
      l1 = next;
    } else {
      const next = l2.next;
      l3.next = l2;
      l3 = l3.next;
      l2 = next;
    }
  }

  if (l1) {
    l3.next = l1;
  }

  if (l2) {
    l3.next = l2;
  }

  return head;
};
