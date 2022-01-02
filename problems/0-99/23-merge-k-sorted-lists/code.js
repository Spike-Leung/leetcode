// https://leetcode-cn.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null;
  }

  if (lists.length === 1) {
    return lists[0];
  }

  if (lists.length === 2) {
    return mergeTwoLists(lists[0], lists[1]);
  }

  let mid = Math.floor(lists.length / 2);
  const listA = mergeKLists(lists.slice(0, mid));
  const listB = mergeKLists(lists.slice(mid));

  return mergeTwoLists(listA, listB);
};

function mergeTwoLists(headA, headB) {
  let head = new ListNode();

  if (headA === null) {
    return headB;
  }

  if (headB === null) {
    return headA;
  }

  if (headA.val >= headB.val) {
    head.val = headB.val;
    headB = headB.next;
  } else {
    head.val = headA.val;
    headA = headA.next;
  }

  let tail = head;

  while (headA && headB) {
    if (headA.val >= headB.val) {
      tail.next = headB;
      headB = headB.next;
      tail = tail.next;
    } else {
      tail.next = headA;
      headA = headA.next;
      tail = tail.next;
    }
  }

  if (headA) {
    tail.next = headA;
  }

  if (headB) {
    tail.next = headB;
  }

  return head;
}
