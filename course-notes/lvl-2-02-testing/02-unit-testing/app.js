
// Example of Test Driven Development: - making a function that sums to numbers.

// Step 1 - what will function do? sum two numbers.

// Step 2 - write test:

const actual = sum(10, 10)
const expected = 20;

if(actual !== expected){
    throw new Error(`TEST FAILED: expected ${expected}, but received ${actual}`)
} else {
    console.log(`TEST PASSED: ${expected} === ${actual}`)
}

// step 4 - run test, knowing that it will fail:

// it failed...

// step 5 - write function:

function sum(x, y){
    return x + y;
}

// step 6 - run test again

// test passes!



