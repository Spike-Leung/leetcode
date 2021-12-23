/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }

  let length = 1;
  let begin = 0;
  let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false));

  // 初始化对角线，i = i , 只有一个元素时，肯定是回文
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }

  // 先从某一列开始
  for (let j = 1; j < s.length; j++) {
    // 遍历每一行的值，i < j，范围才成立，不需要遍历到 s.length
    for (let i = 0; i < j; i++) {
      // 如果左右边界的值不同，不可能形成回文
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        // 减去两个数字后，就剩下一个，一个也能构成回文，所以为 true
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          // 判断去掉两头后，剩下是否构成回文
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      // 当构成回文时，更新 begin 和 长度
      if (dp[i][j] && ((j - i + 1) > length)) {
        length = j - i + 1;
        begin = i;
      }
    }
  }

  return s.slice(begin, begin + length);
};

module.exports = longestPalindrome;
