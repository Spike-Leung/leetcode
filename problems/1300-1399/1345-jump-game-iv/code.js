// https://leetcode-cn.com/problems/jump-game-iv/
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  const idxSameValue = new Map();

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!idxSameValue.has(arr[i])) {
      idxSameValue.set(arr[i], [i]);
    } else {
      idxSameValue.get(arr[i]).push(i);
    }
  }

  const visitedIdxSet = new Set();
  visitedIdxSet.add(0);
  let queue = [0];
  let step = 0;

  while (queue.length > 0) {
    const nextQueue = [];

    for (let idx of queue) {
      if (idx === (arr.length - 1)) {
        return step;
      }

      const v = arr[idx];

      if (idxSameValue.has(v)) {
        idxSameValue.get(v).forEach((i) => {
          if (!visitedIdxSet.has(i)) {
            visitedIdxSet.add(i);
            nextQueue.push(i);
          }
        });

        idxSameValue.delete(v);
      }

      if (idx + 1 < arr.length && !visitedIdxSet.has(idx + 1)) {
        visitedIdxSet.add(idx + 1);
        nextQueue.push(idx + 1);
      }

      if (idx - 1 >= 0 && !visitedIdxSet.has(idx - 1)) {
        visitedIdxSet.add(idx - 1);
        nextQueue.push(idx - 1);
      }
    }

    queue = nextQueue;
    step++;
  }

  return -1;
};

module.exports = minJumps;
