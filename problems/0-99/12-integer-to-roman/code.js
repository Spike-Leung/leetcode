// https://leetcode-cn.com/problems/integer-to-roman/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let res = [];
  const romanMap = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM",
    4000: "MMMM",
  };

  num % 10 > 0 && (res.push(romanMap[num % 10]));

  let carry = 10;

  while (Number.parseInt(num / carry, 10) > 0) {
    const number = (Number.parseInt(num / carry, 10)) % 10 * carry;
    number !== 0 && (res.unshift(romanMap[number]));
    carry *= 10;
  }

  return res.join("");
};


module.exports = intToRoman;
