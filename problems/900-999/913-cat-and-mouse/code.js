// https://leetcode-cn.com/problems/cat-and-mouse/
/**
 * @param {number[][]} graph
 * @return {number}
 */

const MOUSE_WIN = 1;
const CAT_WIN = 2;
const DRAW = 0;

var catMouseGame = function (graph) {
  const n = graph.length;
  const dp = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n * 2).fill(-1)));

  function getResult(mouse, cat, turns) {
    if (turns >= 2 * n) {
      return DRAW;
    }

    if (dp[mouse][cat][turns] < 0) {
      // 老鼠到洞口，老鼠胜利
      if (mouse === 0) {
        dp[mouse][cat][turns] = MOUSE_WIN;
      } else if (cat === mouse) {
        // 猫抓住了老鼠，猫胜利
        dp[mouse][cat][turns] = CAT_WIN;
      } else {
        // 需要看后序的步骤
        getNextResult(mouse, cat, turns);
      }
    }

    return dp[mouse][cat][turns];
  }

  function getNextResult(mouse, cat, turns) {
    // 老鼠先手
    const currMove = turns % 2 === 0 ? mouse : cat;
    const defaultResult = currMove == mouse ? CAT_WIN : MOUSE_WIN;
    // graph[a] 是一个列表，由满足 ab 是图中的一条边的所有节点 b 组成。
    const nextNodes = graph[currMove];
    let result = defaultResult;

    for (let next of nextNodes) {
      // 猫不会走到洞口
      if (currMove === cat && next === 0) {
        continue;
      }

      const nextMouse = currMove === mouse ? next : mouse;
      const nextCat = currMove === cat ? next : cat;
      const nextResult = getResult(nextMouse, nextCat, turns + 1);

      // 根据最佳状态，应该争取赢或者打平，如果走了下一步，结果却输了，那就不走这一步了，不记录了。
      if (nextResult !== defaultResult) {
        result = nextResult;
        // 如果走了下一步不是打平，那就记录。如果是打平，则看看换另一个下一步有没有可能赢。
        if (result !== DRAW) {
          break;
        }
      }
    }

    dp[mouse][cat][turns] = result;
  }

  return getResult(1, 2, 0);
};

module.exports = catMouseGame;
