// https://leetcode-cn.com/problems/push-dominoes/
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  return bfs(dominoes);
};

function doublePointer(dominoes) {
  const s = [...dominoes];
  const n = s.length;
  let left = "L";

  let i = 0;

  while (i < n) {
    let j = i;

    while (j < n && s[j] === ".") {
      j++;
    }

    const right = j < n ? s[j] : "R";

    if (left === right) {
      while (i < j) {
        s[i++] = left;
      }
    } else if (left === "R" && right === "L") {
      let k = j - 1;

      while (i < k) {
        s[i++] = left;
        s[k--] = right;
      }
    }

    left = right;
    i = j + 1;
  }

  return s.join("");
}

function bfs(dominoes) {
  const n = dominoes.length;
  // 记录骨牌翻倒或者确定不翻倒的时间
  const time = new Array(n).fill(-1);
  // 记录骨牌的受力，由于两个方向，因此用二维数组
  const force = new Array(n).fill(0).map(() => []);
  const ret = new Array(n).fill(".");
  let queue = [];

  for (let i = 0; i < n; i++) {
    const c = dominoes[i];

    if (c !== ".") {
      queue.push(i);
      time[i] = 0;
      force[i].push(c);
    }
  }

  while (queue.length) {
    const nextQueue = [];

    for (let i = 0; i < queue.length; i++) {
      const index = queue[i];

      // 对于某个骨牌，只有一个作用力，则这个骨牌在一个作用力下倒下
      if (force[index].length === 1) {
        const f = force[index][0];
        ret[index] = f;

        // 根据当前的力，决定下一个被推到的骨牌是谁
        const nextIndex = f === "L" ? index - 1 : index + 1;

        if (nextIndex >= 0 && nextIndex < n) {
          const t = time[index];

          // 如果下一个骨牌没有被推动过
          if (time[nextIndex] == -1) {
            nextQueue.push(nextIndex);
            // 下一秒被推动
            time[nextIndex] = t + 1;
            // 受到当前骨牌的一个力
            force[nextIndex].push(f);
          } else if (time[nextIndex] === t + 1) {
            // 如果下一个要推的骨牌已经受到一个力，而它也将被当前的骨牌推动，
            // 因此把当前骨牌的力也加入到下一个骨牌的受力
            // 下一个骨牌被推动的时间，是当前骨牌被推动的时间的下一秒，即 t + 1
            // 如果 time[nextIndex] === t + 1, 意味着这个骨牌，在下一秒已经被某个骨牌推动了
            force[nextIndex].push(f);
          }
        }
      }
    }

    queue = nextQueue;
  }

  console.log({
    time,
    force,
  });

  return ret.join("");
}

module.exports = pushDominoes;
