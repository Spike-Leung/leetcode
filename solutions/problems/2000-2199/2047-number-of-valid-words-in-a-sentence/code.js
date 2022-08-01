// https://leetcode-cn.com/problems/number-of-valid-words-in-a-sentence/
/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
  let count = 0;

  sentence.split(" ").forEach((token) => {
    let linkCount = 0;
    let isValid = true;

    for (let i = 0; i < token.length; i++) {
      if (isSign(token[i])) {
        isValid = i === (token.length - 1);
        break;
      }

      if (isNumberStr(token[i])) {
        isValid = false;
        break;
      }

      if (token[i] === "-") {
        if (linkCount > 0 || i === 0) {
          isValid = false;
          break;
        } else if (isChar(token[i - 1]) && isChar(token[i + 1])) {
          linkCount++;
        } else {
          isValid = false;
          break;
        }
      }
    }

    token && isValid && (count++);
  });

  return count;
};

function isNumberStr(s) {
  return s >= "0" && s <= "9";
}

function isChar(s) {
  return s >= "a" && s <= "z";
}

function isSign(s) {
  return ["!", ".", ","].includes(s);
}

module.exports = countValidWords;
