// https://leetcode.cn/problems/magical-string/
/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  // 小于 4 个，即 122，只有一个 1
  if (n < 4) {
    return 1
  }

  // 初始化从包含 1 个的位置开始
  let arr = [1, 2, 2]
  // i 指向当前要生成多少个
  let i = 2
  // j 指向即将要生成的下一个字符
  let j = 3
  let count = 1

  // 当长度还没达到 n，则一直生成
  while (j < n) {
    // 获取当前要生成多少个
    let size = arr[i]
    // 和上一个数字相反
    const num = 3 - arr[j - 1]

    // 生成字符
    while (size > 0 && j < n) {
      // 统计 1 的个数
      if (num === 1) {
        count++
      }

      // 存入生成的字符
      arr.push(num)
      size--
      j++
    }

    // 看下一次要生成多少个
    i++
  }

  return count
};
module.exports = magicalString
