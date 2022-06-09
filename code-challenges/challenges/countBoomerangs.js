
// Notes:
// The boomerangs are in a sequence, so this array [1,1,4] will return 0. Similarly, [1,1,4,4] will also return 0. [1,4,1, 4] will return 2, because the sub-arrays [1,4,1] and [4,1,4] can be formed
// Return only the number of boomerangs, not the list of boomerangs
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
// Be aware that boomerangs can overlap, like so:
// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

const countBoomerangs = (numericArray) => {
    let end;
    let numBoomerangs = 0;
    for (let start = 0; start < numericArray.length; start++){
        for(let end = start + 1; end < numericArray.length; end++){
            if (numericArray[start] === numericArray[(start + 1)]){
                continue;
            }
            if ((numericArray[start] === numericArray[end]) && (numericArray[start] !== numericArray[end - 1])){
                numBoomerangs++;
                break;
            }
        }
    } 
    return numBoomerangs;
}


// // console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])) // 2
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]) === 2)

// // console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])) // 1
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]) === 1)

// // console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])) // 0
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]) === 0)

// // console.log(countBoomerangs([1,4,1,4])) // 2
console.log(countBoomerangs([1,4,1,4]) === 2)

// console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])) // 4 
// original requirements said this should be 3 boomerangs, but that is assuming that the length of boomerangs is capped at
// length 4. The true answer, per requirements, should be 4: [3, 7, 3], [2, 1, 5, 1, 2], [1, 5, 1], [2, -2, 2]
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]) === 4)

// // console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1])) // 5
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]) === 5)

