// https://leetcode.cn/problems/rotated-digits/
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
  const invalidNums =  [3,4,7]
  const validNums = [2,5,6,9]
  const dp = [false,false,true,false,false,true,true,false,false,true]

  for (let i = 10; i <= n; i++) {
    const nums = `${i}`.split("")
    let validNumCount = 0
    let invalidNumCount = 0

    for (const s of nums) {
      invalidNums.includes(+s) && invalidNumCount++
      validNums.includes(+s) && validNumCount++
    }

    dp[i] = invalidNumCount === 0 && validNumCount > 0
  }

  let count = 0
  for (let i = 0; i <= n; i++) {
    dp[i] && count++
  }

  return count
};
module.exports = rotatedDigits
