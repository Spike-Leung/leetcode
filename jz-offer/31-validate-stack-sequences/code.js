/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const cacheStack = [];
  let pushIndex = pushed.length - 1;

  while (popped.length > 0) {
    if (cacheStack.length > 0 && cacheStack[cacheStack.length - 1] === pushed[pushIndex]) {
      cacheStack.pop();
      pushIndex--;
    }

    const pop = popped.shift();

    if (pop === pushed[pushIndex]) {
      pushIndex--;
    } else {
      cacheStack.push(pop);
    }
  }

  if (cacheStack.length) {
    for (let i = cacheStack.length - 1; i >= 0; i--) {
      if (cacheStack[i] === pushed[pushIndex]) {
        pushIndex--;
      } else {
        break;
      }
    }
  }

  return pushIndex === -1;
};

module.exports = validateStackSequences;
