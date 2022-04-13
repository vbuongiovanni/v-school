// # **Preliminaries**
console.log("Preliminaries");

    // 1. Write a for loop that prints to the console the numbers 0 through 9.
    console.log("preliminaries - Q1")
    for(let i = 0; i < 10; i++){
        console.log(i);
    }

    // 2. Write a for loop that prints to the console 9 through 0.
    console.log("preliminaries - Q2")
    for (let i = 9; i >= 0; i--)
        console.log(i);

    // 3. Write a for loop that prints these fruits to the console.
    console.log("preliminaries - Q3")
    let fruits = ["banana", "orange", "apple", "kiwi"];
    for (let fruit of fruits)
        console.log(fruit);

// # **Bronze Medal**
console.log("Bronze Medal");

    // 1. Write a for loop that will push the numbers 0 through 9 to an array.
    console.log("bronze - Q1")
    let bronzeQ1Array = [];
    for (let i = 0; i < 10; i++)
        bronzeQ1Array.push(i)
    
    console.log(bronzeQ1Array);

    // 2. Write a for loop that prints to the console only even numbers 0 through 100.\
    console.log("bronze - Q2")
    for(let i = 0; i <= 100; i++){
        if ((i % 2) == 0)
            console.log(i);
    }

    // 3. Write a for loop that will push every other fruit to an array.
    fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    console.log("bronze - Q3")
    for (let i in fruits){
        if ((i % 2) == 0)
            console.log(fruits[i]);
    }

// # **Silver Medal**
console.log("Silver Medal");

    const peopleArray = [
        {
          name: "Harrison Ford",
          occupation: "Actor"
        },
        {
          name: "Justin Bieber",
          occupation: "Singer"
        },
        {
          name: "Vladimir Putin",
          occupation: "Politician"
        },
        {
          name: "Oprah",
          occupation: "Entertainer"
        }
      ]

    // 1. Write a loop that will print out all the names of the people of the people array

      for(let person of peopleArray){
        console.log(person.name)
      }

    // 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
      const names = [];
      const occupations = [];

      for (let person of peopleArray){
          names.push(person.name);
          occupations.push(person.occupation);
      }
      console.log(names);
      console.log(occupations);

    // 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
    const everyOtherNames = [];
    const everyOtherOccupation = [];
    for(let i in peopleArray){
        if ((i % 2) == 0){
            everyOtherNames.push(peopleArray[i].name);    
        } else {
            everyOtherOccupation.push(peopleArray[i].occupation);
        }        
    }
    console.log(everyOtherNames);
    console.log(everyOtherOccupation);
  
//   # **Gold Medal - Nesting**
console.log("Gold Medal");

    //   1. Create an array that mimics a grid like the following using nested `for` loops:
    //   [[0, 0, 0],
    //   [0, 0, 0],
    //   [0, 0, 0]]
    let rows = [];
    let columns = [];
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            columns[j] = 0;
        }
        rows[i] = columns;
    }
    console.log(rows)
    
    //   2.Create an array that mimics a grid like the following using nested `for` loops:
    //   [[0, 0, 0],
    //   [1, 1, 1],
    //   [2, 2, 2]]
    for (let i = 0; i < 3; i++){
        let columns = [];
        for (let j = 0; j < 3; j++){
            columns[j] = i;
        }
        rows[i] = columns;
    }
    console.log(rows)
    
    //   3.Create an array that mimics a grid like the following using nested `for` loops:
    //   [[0, 1, 2],
    //   [0, 1, 2],
    //   [0, 1, 2]]
    for (let i = 0; i < 3; i++){
        let columns = [];
        for (let j = 0; j < 3; j++){
            columns[j] = j;
        }
        rows[i] = columns;
    }
    console.log(rows)
        
    //   1. Given a grid like the previous ones, write a nested `for` loop that would change every number to an x.
    //   var grid = [["x", ...],
    //               ["x", ...],
    //               ["x",...], ...]
    let testgrid = [
        [1, 2, 3, 45, 46, 45], 
        [234, 3431, 352, 5432, 123434, 1234],
        [30, 234],
        [2], 
        [0, 2, 4, 6523, 24]
    ]
    
    console.log(testgrid);

    for (let i = 0; i < testgrid.length; i++){
        for(let j = 0; j < testgrid[i].length; j++){
            if ((j % 2) == 0) {
                testgrid[i][j] = "x";
            }
        }
    }
    
    console.log(testgrid);


  
