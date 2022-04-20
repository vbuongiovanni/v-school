
// .sort(a, b)

const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5];

arr.sort((a, b) => b - a);
console.log(arr)

// [234, 64, 44, 34, 22, 6,  6,  5,  3,  1]

arr.sort((a, b) => a - b);
console.log(arr)

// [1, 3, 5, 6, 6, 22, 34, 44, 64, 234 ]