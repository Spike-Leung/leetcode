/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let tail = this.head;
  let res = tail.val;
  let count = 0;

  while (tail) {
    // 从 [0, count) 获取一个随机整数，判断是不是 0，从而判断概率是不是 1 / count
    // 这里得用 ++count，而不是 count++, 因为使用了 Math.floor 去获取整数
    // Math.random() 返回介于[0, 1], 在 (0, 1) 之间最后都会向下取整为 0,
    // 所以如果要取 0 , 1 的概率，应该从 [0, 2] 之间 random
    const rand = Math.floor(Math.random() * (++count));

    if (rand === 0) {
      res = tail.val;
    }

    tail = tail.next;
  }

  return res;
};
