/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let popIndex = 0;

  pushed.forEach((p) => {
    stack.push(p);
    while (stack.length && stack[stack.length - 1] === popped[popIndex]) {
      stack.pop();
      popIndex++;
    }
  });

  return stack.length === 0;
};

module.exports = validateStackSequences;
