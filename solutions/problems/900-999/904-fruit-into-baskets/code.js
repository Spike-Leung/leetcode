// https://leetcode.cn/problems/fruit-into-baskets/
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const n = fruits.length
  const fruitType = new Map()

  let left = 0,
    count = 0

  for (let right = 0; right < n; right++) {
    // 记录新类型
    fruitType.set(fruits[right], (fruitType.get(fruits[right]) || 0) + 1)

    // 采摘的类型不能超过两种，超过两种，则需要移除一种类型，使得 [left, right] 只包含最多两种类型
    while (fruitType.size > 2) {
      const leftType = fruits[left]

      fruitType.set(leftType, fruitType.get(leftType) - 1)

      if (fruitType.get(leftType) === 0) {
        fruitType.delete(leftType)
      }

      left++
    }

    // 统计 [left, right] 之间的数量，获取最大值
    count = Math.max(count, right - left + 1)
  }

  return count
}
module.exports = totalFruit
