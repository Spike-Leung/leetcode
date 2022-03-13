const findRestaurant = require("./code");

const listA = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const listB = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
const res = ["Shogun"];
test(`Common favorite restaurant between ${listA} and ${listB} is ${res}`, () => {
  expect(findRestaurant(listA, listB)).toEqual(res);
});

const listA1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const listB1 = ["KFC", "Shogun", "Burger King"];
const res1 = ["Shogun"];
test(`Common favorite restaurant between ${listA1} and ${listB1} is ${res}`, () => {
  expect(findRestaurant(listA1, listB1)).toEqual(res1);
});

const listA2 = ["Shogun", "KFC", "Tapioca Express", "Burger King"];
const listB2 = ["KFC", "Shogun", "Burger King"];
const res2 = ["Shogun", "KFC"];
test(`Common favorite restaurant between ${listA2} and ${listB2} is ${res}`, () => {
  const expected = findRestaurant(listA2, listB2).every((r) => res2.includes(r));
  expect(expected).toBe(true);
});
