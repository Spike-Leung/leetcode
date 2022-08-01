/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) {
    return null;
  }

  const originHead = head;

  // 在链表上复制一份节点
  while (head) {
    const copyNode = new Node(head.val, head.next, null);

    head.next = copyNode;
    head = copyNode.next;
  }

  // 设置复制节点的 random 指针
  head = originHead;

  while (head) {
    const copyNode = head.next;

    if (head.random) {
      copyNode.random = head.random.next;
    }

    head = copyNode.next;
  }

  // 拆分链表，得到复制的链表
  head = originHead;
  let copyHead = head.next;
  const resultHead = copyHead;

  while (head) {
    head.next = copyHead.next;
    head = head.next;

    if (head && head.next) {
      copyHead.next = head.next;
      copyHead = copyHead.next;
    } else {
      copyHead.next = null;
    }
  }

  return resultHead;
};
