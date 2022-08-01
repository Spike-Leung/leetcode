const minJumps = require("./code");

const arr = [100,-23,-23,404,100,23,23,23,3,404];
const minJump = 3;
test(`Only jump ${minJump} in ${arr} can reach end`, () => {
  expect(minJumps(arr)).toBe(minJump);
});

const arr1 = [7];
const minJump1 = 0;
test(`Only jump ${minJump1} in ${arr1} can reach end`, () => {
  expect(minJumps(arr1)).toBe(minJump1);
});

const arr2 = [7,6,9,6,9,6,9,7];
const minJump2 = 1;
test(`Only jump ${minJump2} in ${arr2} can reach end`, () => {
  expect(minJumps(arr2)).toBe(minJump2);
});

const arr3 = [6,1,9];
const minJump3 = 2;
test(`Only jump ${minJump3} in ${arr3} can reach end`, () => {
  expect(minJumps(arr3)).toBe(minJump3);
});

const arr4 = [11,22,7,7,7,7,7,7,7,22,13];
const minJump4 = 3;
test(`Only jump ${minJump4} in ${arr4} can reach end`, () => {
  expect(minJumps(arr4)).toBe(minJump4);
});
