
const arrayOfMultiples = (num, length) => {
    let multiples = [];
    let index = 1;
    for (i = 0; i < length; i++) {
        multiples[i] = index;
        index++;
    }
    return multiples.map((element) => element * num);
}


compareArray(arrayOfMultiples(7, 5), [7, 14, 21, 28, 35])
compareArray(arrayOfMultiples(12, 10), [12, 24, 36, 48, 60, 72, 84, 96, 108, 120])
compareArray(arrayOfMultiples(17, 6), [17, 34, 51, 68, 85, 102])

// testing function:

function compareArray(arrayOne, arrayTwo){
    const array2Sorted = arrayTwo.slice().sort();
    let result = (arrayOne.length === arrayTwo.length) && arrayOne.slice().sort().every(function(value, index) {
        return value === array2Sorted[index];
    });
    console.log(result)
    return result;
} 

