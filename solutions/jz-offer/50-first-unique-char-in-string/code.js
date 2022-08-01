/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  const log = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    log[char] === undefined ? (log[char] = 1) : (log[char] ++);
  }

  for (let key in log) {
    if (log[key] === 1) {
      return key;
    }
  }

  return ' ';
};

module.exports = firstUniqChar;
