// https://leetcode.cn/problems/reorder-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null) {
    return
  }

  const midNode = getMiddleNode(head)
  const l1 = head
  let l2 = midNode.next
  l2 = reverseList(l2)
  midNode.next = null

  mergeList(l1, l2)
}

function getMiddleNode(head) {
  let slow = head
  let fast = head

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function reverseList(head) {
  if (head === null) {
    return head
  }

  let prev = null

  while (head) {
    const next = head.next
    head.next = prev
    prev = head
    head = next
  }

  return prev
}

function mergeList(l1, l2) {
  while (l1 !== null && l2 !== null) {
    let l1Next = l1.next
    let l2Next = l2.next

    l1.next = l2
    l2.next = l1Next
    l2 = l2Next
    l1 = l1Next
  }
}

module.exports = reorderList
