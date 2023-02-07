const alertNames = require("./code")

const keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"]
const keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
const names = ['daniel']
test(`Alert Name with ${keyName} and ${keyTime} should be ${names}`, () => {
  expect(alertNames(keyName, keyTime)).toEqual(names)
})

const keyName1 = ["leslie","leslie","leslie","clare","clare","clare","clare"]
const keyTime1 = ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]
const names1 = ['clare', 'leslie']
test(`Alert Name with ${keyName1} and ${keyTime1} should be ${names1}`, () => {
  expect(alertNames(keyName1, keyTime1)).toEqual(names1)
})
