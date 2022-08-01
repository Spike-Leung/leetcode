// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  const dp = [];
  dp[0] = 1; // dp[2] = dp[1] + dp[0] = 2 => dp[0] = 1
  dp[1] = 1; // 只有一个数字的时候

  const strNum = "" + num;
  const length = strNum.length;

  // 从第二个数字开始遍历
  for (let i = 1; i < length; i++) {
    const siblingNumber = +`${strNum[i - 1]}${strNum[i]}`;
    // i 是数字的下标，第几个数字是 i + 1
    const count = i + 1;

    dp[count] = 0;

    // 如果可以以两个字符翻译，则统计一个字符和两个字符的翻译数量
    if (siblingNumber >= 10 && siblingNumber <= 25) {
      dp[count] += (dp[count - 1] + dp[count - 2]);
    } else {
      // 否则只统计以一个字符翻译的数量
      dp[count] += dp[count - 1];
    }
  }

  // 返回最后一个字符的数量
  return dp[length];
};

module.exports = translateNum;
