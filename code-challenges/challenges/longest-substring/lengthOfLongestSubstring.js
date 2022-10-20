const lengthOfLongestSubstring = s => {

  // handle edge cases where length is 1 or 0:
  if (s.length === 0 || s.length === 1) return s.length;

  // init set
  const set = new Set();
  let length = 0;
  let pattern = [];

  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
    for (let j = i + 1; j <= s.length; j++) {
      pattern = new RegExp(s.slice(j).split("").join("|"));
      if (set.has(s[j]) || j === s.length) {
        length = Math.max(length, set.size);
        set.clear();
        continue;
      } else {
        set.add(s[j]);
      };
    };
  };
  return length;
}

//not my work
const lengthOfLongestSubstringOptimized = s => {
  let set = new Set();
  let prior = 0;
  let bestLength = 0;
  if (s.length === 0 || s.length === 1) return s.length;
  for (let i = 0; i < s.length; i++) {
      while (set.has(s[i])) {
          set.delete(s[prior])
          prior++;
      }
      set.add(s[i]);
      bestLength = Math.max(bestLength, i - prior + 1)
  }
  return bestLength;
}

module.exports = {lengthOfLongestSubstring, lengthOfLongestSubstringOptimized};