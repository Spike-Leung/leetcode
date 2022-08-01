/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  let target = 0;

  for (let i = 2; i <= n; i++) {
    target = (target + m) % i;
  }

  return target;
};

module.exports = lastRemaining;
