// https://leetcode-cn.com/problems/simplify-path/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let paths = path.split("/");
  const mock = [];

  for (let name of paths) {
    if (name === "..") {
      if (mock.length > 0) {
        mock.pop();
      }
    } else if (name && name !== ".") {
      mock.push(name);
    }
  }

  return "/" + mock.join("/");
};

module.exports = simplifyPath;
