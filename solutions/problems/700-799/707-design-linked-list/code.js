// https://leetcode.cn/problems/design-linked-list/
var MyLinkedList = function() {
  const hair = new LinkedNode()
  this.hair = hair
  this.length = 0
};

function LinkedNode(val, next = null) {
  this.val = val
  this.next = next
}

/**
 * @param {number} index
 * @return {number}
 */
// 返回第 index 个元素，如果 index 不存在返回 -1
MyLinkedList.prototype.get = function(index) {
  let head = this.hair.next

  while (index > 0 && head) {
    head = head.next
    index--
  }

  return head !== null ? head.val : -1
};

/**
 * @param {number} val
 * @return {void}
 */
// 在头部添加节点
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new LinkedNode(val)
  const next = this.hair.next
  this.hair.next = node
  node.next = next
  this.length++
};

/**
 * @param {number} val
 * @return {void}
 */
// 在尾部添加节点
MyLinkedList.prototype.addAtTail = function(val) {
  let head = this.hair.next
  const node = new LinkedNode(val)

  if (head === null) {
    this.hair.next = node
    this.length++
    return
  }

  while (head.next) {
    head = head.next
  }

  head.next = node
  this.length++
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
// 在第 index 个元素前添加节点
// index < 0, 添加在头部
// index = length， 添加在尾部
// index > length, 不添加
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length) {
    return
  }

  if (index <= 0) {
    this.addAtHead(val)
    return
  }

  if (index === this.length) {
    this.addAtTail(val)
    return
  }

  const node = new LinkedNode(val)
  let head = this.hair.next

  while (index > 1 && head) {
    head = head.next
    index--
  }

  const next = head.next
  head.next = node
  node.next = next
  this.length++
};

/**
 * @param {number} index
 * @return {void}
 */
// 第 index 个元素存在，则删除
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let head = this.hair.next
  let prev = this.hair

  while (head && index > 0) {
    prev = head
    head = head.next
    index--
  }

  if (head === null) {
    return
  }

  prev.next = head.next
  this.length--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
module.exports = MyLinkedList
