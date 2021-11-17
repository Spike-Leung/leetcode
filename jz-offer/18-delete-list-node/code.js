/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  // 要删除的是 head
  if (head.val === val) {
    return head.next;
  }

  let curr = head;
  let prev = null;

  while (curr && curr.val !== val) {
    prev = curr;
    curr = curr.next;
  }

  // 如果找到了节点, 则删除，找不到就直接返回 head
  if (curr !== null) {
    prev.next = curr.next;
  }

  return head;
};
