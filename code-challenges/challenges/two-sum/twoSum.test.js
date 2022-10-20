const twoSum = require("./twoSum.js");

test("\nexample 1 - Input:\nnums = [2,7,11,15], target = 9;\nOutput: [0,1]\n", () => {
  expect(twoSum([2,7,11,15], 9)).toEqual(expect.arrayContaining([0,1]));
});

test("\nexample 2 - Input:\nnums = [3,2,4], target = 6;\nOutput: [1,2]\n", () => {
  expect(twoSum([3,4,2], 6)).toEqual(expect.arrayContaining([1,2]));
});

test("\nexample 3 - Input:\nnums = [3,3], target = 6;\nOutput: [0,1]\n", () => {
  expect(twoSum([3,3], 6)).toEqual(expect.arrayContaining([0,1]));
});