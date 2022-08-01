// https://leetcode-cn.com/problems/slowest-key/
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let maxDurationTime = releaseTimes[0];
  let maxDurationKey = keysPressed[0];

  for (let i = 1; i < releaseTimes.length; i++) {
    const duration = releaseTimes[i] - releaseTimes[i - 1];

    if (duration > maxDurationTime) {
      maxDurationTime = duration;
      maxDurationKey = keysPressed[i];
    } else if (duration === maxDurationTime) {
      maxDurationKey = keysPressed[i].charCodeAt() >= maxDurationKey.charCodeAt()
        ? keysPressed[i] : maxDurationKey;
    }
  }

  return maxDurationKey;
};

module.exports = slowestKey;
