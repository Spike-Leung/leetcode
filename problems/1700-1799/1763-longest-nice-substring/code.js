// https://leetcode-cn.com/problems/longest-nice-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
  let maxPos = 0;
  let maxLen = 0;

  function dfs(s, start, end) {
    if (start > end) {
      return;
    }

    let lower = 0;
    let upper = 0;

    for (let i = start; i <= end; i++) {
      if (s[i] >= 'a' && s[i] <= "z") {
        lower |= 1 << (s[i].charCodeAt() - 'a'.charCodeAt());
      } else {
        upper |= 1 << (s[i].charCodeAt() - 'A'.charCodeAt());
      }
    }

    // 如果大小写字符的数量一样，则是美好子串，判断是否为最长长度
    if (lower === upper) {
      if (end - start + 1 > maxLen) {
        maxPos = start;
        maxLen = end - start + 1;
      }

      return;
    }

    // 与运算，valid 是一个 26 为二进制，二进制为 1 的表示对应字符的大小写都存在
    // 二进制为 0 的表示对应字符只存在大写或者小写
    const valid = lower & upper;

    let pos = start;

    while (pos <= end) {
      start = pos;

      // 当前字符和 valid 进行与操作，当和 1 的位（大小写都存在）与操作，得到的是 1
      // 当和 0 的位 (只有大写或小写) 与 操作，得到的是 0，从而知道当前字符是否大小写都存在
      // 如果大小写都存在，则累加 pos，从而得到美好子串
      while (pos <= end && (valid & (1 << s[pos].toLowerCase().charCodeAt() - "a".charCodeAt()))) {
        pos++;
      }

      dfs(s, start, pos - 1);
      // 跳过非法字符（只有大写或小写）
      pos++;
    }
  }

  dfs(s, 0, s.length - 1);

  return s.slice(maxPos, maxPos + maxLen);
};


module.exports = longestNiceSubstring;
