// https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/
/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function (digits, n) {
  const length = `${n}`.length
  const digitsCount = digits.length
  let count = 0
  let len = 1

  // 位数少于 n 的位数，可以随意组合
  while (len < length) {
    count += Math.pow(digitsCount, len)
    len++
  }

  const str = `${n}`

  // 位数等于 n 的位数
  function dps(index) {
    let lessThanCount = 0
    let equalThanCount = 0

    // 对每一位进行判断，如果选择的是小于当前位的数字，则当前位之后的可以随便组合，总会小于 n
    // 如果选择的数字，等于当前位，则要根据后面的选择进行判断
    digits.forEach((d) => {
      if (+d < +str[index]) {
        lessThanCount++
      } else if (+d === +str[index]) {
        equalThanCount++
      }
    })

    // 统计小于当前位的
    count += (lessThanCount * Math.pow(digitsCount, length - 1 - index))

    // 如果等于当前位
    if (equalThanCount > 0) {
      // 如果是最后一个数字，即和 n 完全一样，算一个组合
      if (index === length - 1) {
        count += 1
        return
      }

      // 继续看后面一位可以怎么选
      dps(index + 1)
    }

    return
  }

  dps(0)

  return count
}
module.exports = atMostNGivenDigitSet
