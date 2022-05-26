/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

0400 - 1159, timeOfDay = "morning"
1200 - 1659, timeOfDay = "afternoon"
1700 - 1959, timeOfDay = "evening"
2000 - 0359, timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"
*/

function greeting(name) {
    const date = new Date();

    const hour = new String(date.getHours());
    const minute = new String(date.getMinutes());
    let time = new Number(hour + minute);
    time = time.valueOf();

    let greeting = "";

    if (time >= 2000 || time <= 359) {
        greeting = "night";
    } else if (time >= 400 || time <= 1159) {
        greeting = "morning";
    } else if (time >= 1200 || time <= 1659) {
        greeting = "aftnoon";
    } else {
        greeting = "evening";
    }

    return (`Good ${greeting}, ${name}!`)
}

console.log(greeting("Bob"))

