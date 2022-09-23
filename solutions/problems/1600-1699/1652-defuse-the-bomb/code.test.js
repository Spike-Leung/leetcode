const decrypt = require("./code")

const code = [5,7,1,4]
const key = 3
const res = [12,10,16,13]
test(`${code} after decrypt should be ${res}`, () => {
  expect(decrypt(code, key)).toEqual(res)
})

const code1 = [1,2,3,4]
const key1 = 0
const res1 = [0,0,0,0]
test(`${code1} after decrypt should be ${res1}`, () => {
  expect(decrypt(code1, key1)).toEqual(res1)
})

const code2 = [2,4,9,3]
const key2 = -2
const res2 = [12,5,6,13]
test(`${code2} after decrypt should be ${res2}`, () => {
  expect(decrypt(code2, key2)).toEqual(res2)
})
