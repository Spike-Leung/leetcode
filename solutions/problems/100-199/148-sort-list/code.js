// https://leetcode.cn/problems/sort-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (head === null) {
    return null
  }

  const node = head
  const length = getLength(node)
  const dummyNode = new ListNode(0, head)

  // subLength 从 1 开始，进行两两合并；每次 subLength 翻倍，进行四四合并，八八合并...直到达到链表长度
  for (let subLength = 1; subLength < length; subLength <<= 1) {
    // 从头开始遍历
    let curr = dummyNode.next
    // prev 指向每次遍历，已经完成合并的链表
    let prev = dummyNode

    // 遍历链表
    while (curr !== null) {
      let head1 = curr

      // 根据 subLength 找到对应长度的链表进行合并
      for (let i = 1; i < subLength && curr.next !== null; i++) {
        curr = curr.next
      }

      // head2 指向 head1 后的一个节点
      let head2 = curr.next
      // 将 head1 的尾部置为 null， 得到一条独立的链表
      curr.next = null
      // curr 此时从 head2 开始
      curr = head2

      // 以同样的方法，得到对应长度的第二条链表, 注意要判断 curr 是否到尾了
      for (let i = 1; i < subLength && curr !== null && curr.next !== null; i++) {
        curr = curr.next
      }

      // next 用于暂存链表还没处理的部分
      let next = null

      // 此时 curr 可能已经到尾，没有下一个节点了，需要判断一下
      if (curr) {
        next = curr.next
        curr.next = null
      }

      // 合并链表
      const mergedList = merged(head1, head2)

      // 将前面合并好的部分，和新得到的 merged 链接起来
      prev.next = mergedList

      // 将 prev 指向链表的最后一个节点，方便下一次遍历和新的 merged 链接
      while (prev.next !== null) {
        prev = prev.next
      }

      // 处理接下来的部分
      curr = next
    }
  }

  return dummyNode.next
}

function getLength(head) {
  if (head === null) {
    return 0
  }

  let length = 0

  while (head !== null) {
    length++
    head = head.next
  }

  return length
}

function merged(head1, head2) {
  if (head1 === null) {
    return head2
  }

  if (head2 === null) {
    return head1
  }

  const dummyNode = new ListNode()
  let curr = dummyNode
  let temp1 = head1
  let temp2 = head2

  while (temp1 !== null && temp2 !== null) {
    if (temp1.val < temp2.val) {
      curr.next = temp1
      temp1 = temp1.next
    } else {
      curr.next = temp2
      temp2 = temp2.next
    }

    curr = curr.next
  }

  if (temp1 !== null) {
    curr.next = temp1
  } else if (temp2 !== null) {
    curr.next = temp2
  }

  return dummyNode.next
}

module.exports = sortList
