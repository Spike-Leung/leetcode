// https://leetcode-cn.com/problems/the-number-of-weak-characters-in-the-game/
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
  let maxDefense = 0;
  let ans = 0;

  properties.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0];
  });

  properties.forEach(([ack, def]) => {
    if (def < maxDefense) {
      ans++;
    } else {
      maxDefense = def;
    }
  });

  return ans;
};

module.exports = numberOfWeakCharacters;
