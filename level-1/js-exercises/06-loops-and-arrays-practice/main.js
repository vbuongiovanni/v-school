
// #1
// Loop through the following array and count how many "computers" there are. Log the final count:
const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

let numComputers = 0;

for(let officeItem of officeItems) {
    if (officeItem === "computer"){
        numComputers += 1
    }
}
console.log("Challenge 1:");
console.log(numComputers);



// #2
// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]

console.log("Challenge 2:");
for (let person of peopleWhoWantToSeeMadMaxFuryRoad){
    if(person["age"] >= 18){
        console.log("old enough");
    } else {
        console.log("not old enough");
    }
}
  
    // Bonus challenge:
        // part 1
            // Log to the console a personalized message like:
            // `Mike is not old enough to see Mad Max`
            // or
            // `Madeline is old enough to see Mad Max.`

        console.log("Challenge 2, bonus 1:");
        for (let person of peopleWhoWantToSeeMadMaxFuryRoad){
            if (person["age"] >= 18){
                console.log(`${person["name"]} is old enough to see Mad Max`);
            } else {
                console.log(`${person["name"]} is not old enough to see Mad Max`);
            }
        }



        // part 2:
            // Check to see if the movie goer is a male or female for an even more personalized message.
            // `Mike is not old enough to see Mad Max Fury Road, don't let HIM in.`
            // or
            // `Madeline is old enough. SHE'S good to see Mad Max Fury Road.`

        console.log("Challenge 2, bonus 2:");
        let ageTest;
        let pronounTest;

        for (let person of peopleWhoWantToSeeMadMaxFuryRoad){            
            ageTest = person["age"] < 18 ? "not " : "";
            entranceTest = person["age"] < 18 ? "don't " : "";
            pronounTest = person["gender"] === "male" ? "him" : "her";
            console.log(`${person.name} is ${ageTest}old enough to see Mad Max... ${entranceTest}let ${pronounTest} in!`);
        }
// #3

const lightSwitch1 = [2, 5, 435, 4, 3]; // "The light is on"
const lightSwitch2 = [1, 1, 1, 1, 3];   // "The light is on"
const lightSwitch3 = [9, 3, 4, 2];      // "The light is off"

const lightSwitch = numericArray => {
    let total = 0;
    for (element of numericArray){
        total += element;
    }
    if(((total % 2) == 0) | (total === 0)) {
        return "off"
    } else {
        return "on"
    }
}

console.log(lightSwitch(lightSwitch1)); // "The light is on"
console.log(lightSwitch(lightSwitch2)); // "The light is on"
console.log(lightSwitch(lightSwitch3)); // "The light is off"
