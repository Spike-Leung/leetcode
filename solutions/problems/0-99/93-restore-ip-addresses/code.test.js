const restoreIpAddresses = require("./code")

const s = "0000"
const res = ["0.0.0.0"]
test(`Restore Ip from ${s} should be {res}`, () => {
  expect(restoreIpAddresses(s)).toEqual(res)
})
