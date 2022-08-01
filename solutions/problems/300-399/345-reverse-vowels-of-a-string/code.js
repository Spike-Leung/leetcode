// https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let l = 0;
  let r = s.length - 1;
  let sArr = [...s];

  while (l < r) {
    while (l < r && !isVowel(sArr[l])) {
      l++;
    }

    while (l < r && !isVowel(sArr[r])) {
      r--;
    }

    swap(sArr, l, r);
    l++;
    r--;
  }

  return sArr.join("");
};

function swap(s, l, r) {
  const t = s[l];
  s[l] = s[r];
  s[r] = t;
}

function isVowel(c) {
  return ["a", "e", "i", "o", "u"].includes(c.toLowerCase());
}
module.exports = reverseVowels;
