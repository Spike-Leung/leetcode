// https://leetcode.cn/problems/making-a-large-island/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  if (grid.length === 0) {
    return 0
  }

  const n = grid.length
  const set = []
  const area = []
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  // grid 不为空，那么 ans 至少为 1 (如果全是 0， 至少也会翻一个)
  let ans = 1
  // 初始化并查集
  for (let i = 0; i < n * n; i++) {
    set[i] = i
    area[i] = 1
  }

  // 构建并查集
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        for (const [dx, dy] of dirs) {
          const x = i + dx
          const y = j + dy

          if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 1) {
            const rootId = i * n + j
            const nearId = x * n + y
            // 获取两个 id 对应的集合的根节点
            const rootParent = find(set, rootId)
            const nearParent = find(set, nearId)

            // 已经在同一个集合
            if (rootParent === nearParent) {
              continue
            }

            // 不在同一个集合，合并，同时去计算这个集合的根节点的面积，用于代表这个集合的面积总和
            set[nearParent] = rootParent
            area[rootParent] += area[nearParent]
            // 这里也统计一次最大面积，因为可能全都是岛屿 (1)，没有海洋 (0)
            ans = Math.max(ans, area[rootParent])
          }
        }
      }
    }
  }

  // 统计所有 0 的位置，如果翻转这个位置，能够得到的面积
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        // 翻转后，面积初始为 1
        let currArea = 1
        const visited = {}
        // 获取四个方向的面积，累计面积
        for (let [dx, dy] of dirs) {
          const x = i + dx
          const y = j + dy

          if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 1) {
            const rootId = find(set, x * n + y)

            // 这块面积已经累计过则跳过
            if (visited[rootId] === true) {
              continue
            }

            visited[rootId] = true
            // 累计面积
            currArea += area[rootId]
          }
        }

        // 取最大者
        ans = Math.max(currArea, ans)
      }
    }
  }

  return ans
}

function find(set, id) {
  if (set[id] === id) {
    return id
  } else {
    set[id] = find(set, set[id])
    return set[id]
  }
}

module.exports = largestIsland
