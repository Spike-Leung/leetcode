// https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem/
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  const res = []
  folder.sort()

  while (folder.length) {
    const parentFolder = folder.shift()
    res.push(parentFolder)

    folder = folder.filter((f) => f.indexOf(parentFolder + "/") === 0 ? false : true)
  }

  return res
};
module.exports = removeSubfolders
