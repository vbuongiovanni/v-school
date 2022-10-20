
const isAnagram = (str1, str2) => {

  // convert string to object w/ char count:
    const mapChars = (str) => {
      return str.split("").reduce((prev, curr) => {
        if (Object.keys(prev).includes(curr)) {
          return {...prev, [curr] : 1 + prev[curr]}
        } else {
          return {...prev, [curr] : 1}
        }
      }, {});
    }

  // compare values of unique keys:
    const compareProps = (obj1, obj2) => {
      const keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)]) ]
      return !keys.map(key => obj1[key] === obj2[key]).includes(false)
    }

  // create objects from strings:
  const strObject1 = mapChars(str1);
  const strObject2 = mapChars(str2);

  // return true if anagram
  return compareProps(strObject1, strObject2);
}

module.exports = isAnagram;