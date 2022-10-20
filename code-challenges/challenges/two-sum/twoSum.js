// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (nums, target) => {
  let j
  for (let i = 0 ; i < nums.length; i++) {
    num2Index = nums.indexOf(target - nums[i]);
    j = num2Index !== -1 ? num2Index : undefined;
    if ((j !== undefined) && (i !== j)) return [i, j]
  }
}

// Runtime: 266 ms, faster than 12.03% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.5 MB, less than 59.37% of JavaScript online submissions for Two Sum.

module.exports = twoSum;