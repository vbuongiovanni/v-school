const {lengthOfLongestSubstring, lengthOfLongestSubstringOptimized} = require("./lengthOfLongestSubstring");

test("Example 1 - 'abcabcbb'", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test("Example 2 - 'bbbbb'", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("Example 3 - 'pwwkew'", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test("Example 1 - ''", () => {
  expect(lengthOfLongestSubstring("")).toBe(0);
});

test("Example 1 - 'a'", () => {
  expect(lengthOfLongestSubstring("a")).toBe(1);
});



test("Example 1 - 'abcabcbb'", () => {
  expect(lengthOfLongestSubstringOptimized("abcabcbb")).toBe(3);
});

test("Example 2 - 'bbbbb'", () => {
  expect(lengthOfLongestSubstringOptimized("bbbbb")).toBe(1);
});

test("Example 3 - 'pwwkew'", () => {
  expect(lengthOfLongestSubstringOptimized("pwwkew")).toBe(3);
});

test("Example 1 - ''", () => {
  expect(lengthOfLongestSubstringOptimized("")).toBe(0);
});

test("Example 1 - 'a'", () => {
  expect(lengthOfLongestSubstringOptimized("a")).toBe(1);
});