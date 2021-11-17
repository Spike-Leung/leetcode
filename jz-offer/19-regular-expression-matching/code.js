/**
 *
 * https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let sIndex = 0;
  let pIndex = 0;
  let match = true;

  while (sIndex < s.length && pIndex < p.length && match) {
    const pCur = p[pIndex];
    const sCur = s[sIndex];
    const isAsteriskFollow = p[pIndex + 1] === "*";
    const isPeriod = pCur === ".";

    // 如果是 .*，可以将字符串完全匹配完
    if (isPeriod && isAsteriskFollow) {
      sIndex = s.length;
    } else {
      // 如果当前字符和模式匹配，则继续匹配下一个字符
      if (sCur === pCur) {
        sIndex++;

        if (!isAsteriskFollow) {
          pIndex++;
        }
      } else {
        if (isPeriod) {
          sIndex++;
          pIndex++;
        } else {
          if (isAsteriskFollow) {
            pIndex += 2;
          } else {
            match = false;
          }
        }
      }
    }
  }

  let sLength = s.length;

  // 字符匹配 a* 的时候，pIndex 不会增加，这里特殊处理一下这个情况
  while (pIndex <= p.length && p[pIndex + 1] === "*") {
    if (p[pIndex] === ".") {
      let skipCount = 2;
      let index = pIndex + 2;

      while (p[index] === "." && p[index + 1] !== "*" && sLength > 0) {
        skipCount++;
        index++;
        sLength--;
      }

      pIndex += skipCount;
    } else {
      // 把尽可能多的相同的字符跳过
      // 如果还有 d* 这样的组合也要跳过
      const pCur = p[pIndex];
      let index = pIndex;
      let skipCount = 0;

      while (p[index] === pCur || p[index] === "*" || p[index + 1] === "*") {
        skipCount++;
        index++
      }

      pIndex += skipCount;
    }
  }

  // console.log({ sIndex, sLength: s.length, pIndex, pLength: p.length });

  return sIndex >= s.length && pIndex >= p.length;
};

module.exports = isMatch;
