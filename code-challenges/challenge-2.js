
const people = [ "John", "Adam", "Amber" ]

const countLength = (people) => {
    let output = [];
    for(let name of people){
        output.push(name.length);
    }
    return output;
}

console.log(countLength(people));


// using .map()

const countLengthMap = (people) => {

    return people.map((name) => name.length);
}

console.log(countLengthMap(people));

// 

// let url =  "https://swapi.dev/people/1/";

// axios.get(url)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))


// 

const arr1 = [ 1, 3, 5 ]
const arr2= [ 2, 4, 6 ]
const arr3 = [...arr1, ...arr2]

console.log(arr3)
