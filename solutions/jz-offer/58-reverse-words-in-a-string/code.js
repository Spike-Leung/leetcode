/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let index = 0;
  let reverseStr = "";

  while (index < s.length) {
    while (s[index] === " " && index < s.length) {
      index++;
    }

    let word = "";
    while (s[index] !== " " && index < s.length) {
      word += s[index];
      index++;
    }

    if (word !== "") {
      reverseStr = reverseStr ? word + " " + reverseStr : word;
    }
  }

  return reverseStr;
};

module.exports = reverseWords;
