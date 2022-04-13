
const sumArrays = (arrayOfArrays) => {
    output = 0;
    for(let array of arrayOfArrays) {
        for(let element of array) {
            output += element;
        }
    } 
     return output;
}

console.log(sumArrays([[1,2],[5,6,],[3,4]]));
console.log(sumArrays([[3,3],[5,25,5],[4,4], [2,1,2]]));

// console.log(sumArrays([[1,2],[5,6,],[3,4]])) // 21
// console.log(sumArrays([[3,3],[5,25,5],[4,4], [2,1,2]])) // 54
