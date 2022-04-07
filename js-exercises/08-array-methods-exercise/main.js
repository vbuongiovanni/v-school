// Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

const fruits = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruits);
console.log("vegetables: ", vegetables);

// 1. Remove the last item from the vegetable array.
console.log("\n");
console.log("1. Remove the last item from the vegetable array.");
let result1 = vegetables.pop();
console.log(vegetables);

// 2. Remove the first item from the fruit array.
console.log("\n");
console.log("2. Remove the first item from the fruit array.");
let result2 = fruits.shift();
console.log(fruits);

// 3. Find the index of "orange."
console.log("\n");
console.log("3. Find the index of 'orange.'");
let result3 = fruits.indexOf("orange");
console.log("index of 'orange': " + fruits.indexOf("orange"));

// 4. Add that number to the end of the fruit array.
console.log("\n");
console.log("4. Add that number to the end of the fruit array.");
let result4 = fruits.push(result3);

console.log("fruit: ", fruits);

// 5. Use the length property to find the length of the vegetable array.
console.log("\n");
console.log("5. Use the length property to find the length of the vegetable array.");
let result5 = vegetables.length;
console.log("The length of the vegetable array is: " + result5)

// 6. Add that number to the end of the vegetable array.
console.log("\n");
console.log("6. Add that number to the end of the vegetable array.");
let result6 = vegetables.push(result5);
console.log("vegetables: ", vegetables);

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
console.log("\n");
console.log("7. Put the two arrays together into one array. Fruit first. Call the new Array 'food'.");
const food = fruits.concat(vegetables);

console.log("fruits + vegetables: ", food);

// 8. Remove 2 elements from your new array starting at index 4 with one method.
console.log("\n");
console.log("8. Remove 2 elements from your new array starting at index 4 with one method.");
console.log(food.splice(4, 2));
console.log("fruits + vegetables: ", food);

// 9. Reverse your array.
console.log("\n");
console.log("9. Reverse your array.");
food.reverse();
console.log("fruits + vegetables (reversed): ", food);

// 10. Turn the array into a string and return it.
console.log(food.join());
// If you've done everything correctly, the last step should print the following string to the console:

// 3,pepper,1,watermelon,orange,apple
