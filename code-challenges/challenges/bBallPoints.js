
/* 
Heres's today's coding challenge!(review at 2pm MST):
Basketball Points
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored.
Find the final points for the team and return that value.
Examples
points(1, 1) ➞ 5
points(7, 5) ➞ 29
points(38, 8) ➞ 100
 */

let points = function(dualPoints, threePointers){
    return (dualPoints * 2) + (threePointers * 3);
}

// unit testing:

let testCaseOne = points(1, 1);
let testCaseTwo = points(7, 5);
let testCaseThree = points(38, 8);

let testCaseOneResult = testCaseOne === 5;
let testCaseTwoResult = testCaseTwo === 29;
let testCaseThreeResult = testCaseThree === 100;

console.log("Test case - points(1, 1) = " + testCaseOne + ". Status: " + testCaseOneResult);
console.log("Test case - points(7, 5) = " + testCaseTwo + ". Status: " + testCaseTwoResult);
console.log("Test case - points(38, 8) = " + testCaseThree + ". Status: " + testCaseThreeResult);


