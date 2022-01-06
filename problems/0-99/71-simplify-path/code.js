// https://leetcode-cn.com/problems/simplify-path/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let index = 1;
  let pathStack = ["/"];

  while (index < path.length) {
    // 跳过重复的 /
    while (index < path.length && path[index] === "/") {
      index++;
    }

    // 获取路径
    const start = index;
    while (index < path.length && path[index] !== "/") {
      index++;
    }

    if (start >= path.length) {
      break;
    }

    const pathName = path.slice(start, index);
    // 路径就是当前路径，直接跳过
    if (pathName !== ".") {
      // 如果是 .. 并且有父级目录，则弹出当前目录
      if (pathName === "..") {
        if (pathStack.length >= 3) {
          // 分隔符
          pathStack.pop();
          // 路径
          pathStack.pop();
        }
      } else {
        // 有路径则加入路径
        pathStack.push(pathName);
        pathStack.push("/");
      }
    }

    index++;
  }

  // 移出最后的 /
  if (pathStack.length > 1 && pathStack[pathStack.length - 1] === "/") {
    pathStack.pop();
  }

  return pathStack.join("");
};

module.exports = simplifyPath;
