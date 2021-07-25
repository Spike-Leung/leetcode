/**
 * 7. Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/
 *
 * https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let r = 0;

  if (x < 0) {
    r = -Number.parseInt((-x + "").split("").reverse().join(""));
  } else {
    r =  Number.parseInt((x + "").split("").reverse().join(""));
  }

  if (r >= -Math.pow(2, 31) && r <= (Math.pow(2, 31) - 1)) {
    return r;
  }

  return 0;
};

Module.exports = reverse;
