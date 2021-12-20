const constructArr = require("./code");

const arr = [1,2,3,4,5];
const productArr = [120,60,40,30,24];
test(`Product array of ${arr} is ${productArr}`, () => {
  expect(constructArr(arr)).toEqual(productArr);
});

const arr1 = [7, 2, 2, 4, 2, 1, 8, 8, 9, 6, 8, 9, 6, 3, 2, 1];
const productArr1 = [286654464,1003290624,1003290624,501645312,1003290624,2006581248,250822656,250822656,222953472,334430208,250822656,222953472,334430208,668860416,1003290624,2006581248];
test(`Product array of ${arr1} is ${productArr1}`, () => {
  expect(constructArr(arr1)).toEqual(productArr1);
});
