// Javascript Loops

    // For loop - same syntax as Java

        // increment operator: i++
        // decrement operator: i-- 
        // in place summation: i += 2
        // in place subtraction: i -= 2

    // for (var i = 0; i < 20; i++) {
    //     console.log(i)
    // }

    // for (var i = 0; i < 20; i+= 2) { // count by two
    //     console.log(i)
    // }

    // working with arrays
    var favFoods = ["pizza", "pasta", "ice cream", "banana"]


    // console.log(favFoods[0])
    // console.log(favFoods[2])
    // console.log(favFoods[3])
    // console.log(favFoods[4])

    // for (var i = 0; i < favFoods.length; i++) {
    //     console.log(favFoods[i])
    // }

    var numbers = [1, 2, 3, 4, 5, 6]

    // print only the even numbers

    for (var i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0){
            console.log(numbers[i])
        }

    }


// While Loop

var count = 0;

while(count < 10) {

    console.log("hi")
    count++;

}

