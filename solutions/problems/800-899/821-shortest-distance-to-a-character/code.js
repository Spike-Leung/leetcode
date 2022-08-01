// https://leetcode-cn.com/problems/shortest-distance-to-a-character/
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const n = s.length;
  // 初始化距离为最大距离 n
  let res = Array.from({ length: n }, () => n);
  let prevCharIndex = null;

  // 遍历所有字符
  for (let i = 0; i < n; i++) {
    if (s[i] !== c) {
      // 如果找到了字符左边的 c，则不断遍历向右时，距离增加 1
      if (prevCharIndex !== null) {
        res[i] = res[i - 1] + 1;
      } else {
        // 如果没有找到字符，无法计算距离，先跳过不处理
        continue;
      }
    } else {
      // 找到字符
      res[i] = 0;
      // 标记找到的字符
      prevCharIndex = i;
      // 从找到的字符向左遍历，再计算一次左边的距离，取较小者
      let p = i - 1;

      while (res[p] !== 0 && p >= 0 && res[p] > res[p + 1] + 1) {
        res[p] = res[p + 1] + 1;
        p--;
      }
    }
  }

  return res;
};
module.exports = shortestToChar;
