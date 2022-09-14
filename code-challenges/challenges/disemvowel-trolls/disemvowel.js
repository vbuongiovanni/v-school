/* initial solution:
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const allVowels = [...vowels, ...vowels.map(char => char.toUpperCase())].join("|");
  const pattern = new RegExp(allVowels);
  let cleanedStr = "";
  for (char of str) {
    cleanedStr += char.replace(pattern, "");
  }
  return cleanedStr;
}
 */
// improved solution
const disemvowel = str => str.replace(/[aeiou]/gi, '');
module.exports = disemvowel;