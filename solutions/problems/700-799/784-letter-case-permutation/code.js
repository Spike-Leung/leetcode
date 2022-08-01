// https://leetcode.cn/problems/letter-case-permutation/
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  let res = [];

  function getStr(str, preStr) {
    if (str.length === 1) {
      if (isChar(str)) {
        res.push(preStr + str);
        res.push(preStr + switchCase(str));
      } else {
        res.push(preStr + str);
      }

      return;
    }

    if (isChar(str[0])) {
      getStr(str.slice(1), preStr + str[0]);
      getStr(str.slice(1), preStr + switchCase(str[0]));
    } else {
      getStr(str.slice(1), preStr + str[0]);
    }
  }

  getStr(s, "");

  return res;
};

function switchCase(char) {
  return String.fromCharCode(char.charCodeAt(0) ^ (1 << 5));
}

function isChar(char) {
  return !/\d/.test(char);
}

var letterCasePermutationByBit = function(s) {
  const charCount = [...s].filter((c) => isChar(c)).length;
  const res = [];

  for (let bits = 0; bits < (1 << charCount); bits++) {
    let count = 0;
    const word = [];

    for (const c of [...s]) {
      if (isChar(c)) {
        // 当前位为 1 则用小写
        if (((bits >> count++) & 1) === 1) {
          word.push(c.toLowerCase());
        } else {
          word.push(c.toUpperCase());
        }

      } else {
        // 非字符直接拼接
        word.push(c);
      }
    }

    res.push(word.join(""));
  }

  return res;
};

module.exports = letterCasePermutation;
