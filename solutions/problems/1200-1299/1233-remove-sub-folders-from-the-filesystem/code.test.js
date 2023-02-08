const removeSubfolders = require("./code")

const folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
const res = ["/a","/c/d","/c/f"]
test(`${folder} after removing sub folder should be ${res}`, () => {
  expect(removeSubfolders(folder)).toEqual(res)
})

const folder1 = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
const res1 = ["/a","/c/d","/c/f"]
test(`${folder1} after removing sub folder should be ${res1}`, () => {
  expect(removeSubfolders(folder1)).toEqual(res1)
})
