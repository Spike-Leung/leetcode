// https://leetcode-cn.com/problems/grid-illumination/
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
  const ans = [];
  const lampsMap = {};
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [-1, 1], [1, -1]];

  for (let [x, y] of lamps) {
    const lightSet = new Set();
    lightSet.add(`${x},${y}`);

    for (const [i, j] of dirs) {
      let a = x + i;
      let b = y + j;

      while (a >= 0 && b >= 0 && a < n && b < n) {
        lightSet.add(`${a},${b}`);
        a += i;
        b += j;
      }
    }

    lampsMap[`${x},${y}`] = lightSet;
  }

  let allLights = getAllLights(lampsMap);

  for (const [qx, qy] of queries) {
    const pos = `${qx},${qy}`;
    ans.push(allLights.has(pos) ? 1 : 0);

    const lampsToTurnOff = getLampsToTurnOff(lampsMap, qx, qy);

    if (lampsToTurnOff.length > 0) {
      for (const pos of lampsToTurnOff) {
        delete lampsMap[pos];
      }

      allLights = getAllLights(lampsMap);
    }
  }

  return ans;
};

function getAllLights(lampsMap) {
  return Object.values(lampsMap).reduce((s, l) => {
    return new Set([...s, ...l]);
  }, new Set());
}

function getLampsToTurnOff(lampsMap, qx, qy) {
  const lamps = Object.keys(lampsMap);
  const offLights = [[qx, qy]];
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [-1, 1], [1, -1]];
  const lampsToTurnOff = [];

  for (const dir of dirs) {
    offLights.push([qx + dir[0], qy + dir[1]]);
  }

  for (const [x, y] of offLights) {
    if (lamps.includes(`${x},${y}`)) {
      lampsToTurnOff.push(`${x},${y}`);
    }
  }

  return lampsToTurnOff;
}

module.exports = gridIllumination;
