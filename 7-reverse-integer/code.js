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
  const r = Number.parseInt(Math.abs(x).toString().split("").reverse().join("")) * Math.sign(x);

  return r >= -Math.pow(2, 31) && r <= (Math.pow(2, 31) - 1) ? r :0;
};

module.exports = reverse;
