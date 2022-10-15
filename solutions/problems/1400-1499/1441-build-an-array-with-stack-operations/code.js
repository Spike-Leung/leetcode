// https://leetcode.cn/problems/build-an-array-with-stack-operations/
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  const serial = []
  const length = target.length
  let count = 0

  for (let i = 1; i <= n; i++) {
    // target 中的个数全部匹配，结束序列构造
    if (count === length) {
      break
    }

    // 每个数首先要入栈
    serial.push("Push")

    // 如果这个数和 target 匹配，那么这个数就不用弹出，继续匹配下一个数字
    if (target[count] === i) {
      count++
      continue
    } else {
      // 如果这个数字和 target 不匹配，需要弹出，然后匹配下一个数字
      serial.push("Pop")
    }
  }

  return serial
};
module.exports = buildArray
