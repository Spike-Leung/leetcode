// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const hair = new ListNode(0, head);
  let tail = hair;
  let prev = hair;

  while (head) {
    for (let i = 0; i < k; i++) {
      tail = tail.next;

      // 如果不足 K 个则不需要反转，也意味着反转结束，返回 head
      if (!tail) {
        return hair.next;
      }
    }

    ([head, tail] = reverseLinkedList(head, tail));

    prev.next = head;
    head = tail.next;
    prev = tail;
  }

  return hair.next;
};

function reverseLinkedList(head, tail) {
  let prev = tail.next;
  let p = head;

  while (prev !== tail) {
    let nex = p.next;
    p.next = prev;
    prev = p;
    p = nex;
  }

  return [tail, head];
}
