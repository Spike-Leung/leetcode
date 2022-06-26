// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/
var connect = function (root) {
  if (root === null) {
    return root
  }

  let level = [root]

  while (level.length) {
    const nextLevel = []

    for (let i = 0; i < level.length; i++) {
      const node = level[i]
      node.next = level[i + 1] || null
      node.left && nextLevel.push(node.left)
      node.right && nextLevel.push(node.right)
    }

    level = nextLevel
  }

  return root
}

var connectO1 = function (root) {
  if (!root) {
    return root
  }

  let prev = root

  while (prev.left) {
    let curr = prev

    // 使用 curr 遍历当前层
    while (curr) {
      curr.left.next = curr.right

      if (curr.next) {
        curr.right.next = curr.next.left
      }

      curr = curr.next
    }

    // 遍历下一层
    prev = prev.left
  }

  return root
}

// connectO1 的递归写法
var connectO1Recursion = function (root) {
  if (!root) {
    return root
  }

  if (root.left) {
    // 处理当前层
    root.left.next = root.right
    root.right.next = root.next ? root.next.left : null

    // 对下一层的节点继续处理
    connectO1Recursion(root.left)
    connectO1Recursion(root.right)
  }

  return root
}

var connectO1Recursion2 = function (root) {
  if (!root) {
    return root
  }

  let left = root.left
  let right = root.right

  while (left) {
    left.next = right
    left = left.right
    right = right.left
  }

  connectO1Recursion2(root.left)
  connectO1Recursion2(root.right)

  return root
}

Module.exports = connect
