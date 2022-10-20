const isAnagram = require("./isAnagram.js");

test("Test Case 1", () => {
  expect(isAnagram('finder', 'friend')).toBe(true);
  expect(isAnagram('hello', 'bye')).toBe(false);
  expect(isAnagram('sadder', 'dreads')).toBe(true);
  expect(isAnagram('trap', 'part')).toBe(true);
  expect(isAnagram('race', 'carr')).toBe(false);
});
