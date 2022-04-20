'use strict'

// since html-convention uses dashes, we use bracket notation to access the form from the DOM:
const form = document["my-form"];

// often, the "submit" event is the key event of interest within a form. As a result, we don't need to explicitly reference
// the <button> element within the form. The fact that it is there is enough to fire the event:

let p;

form.addEventListener("submit", (event) => {
    // there are some default actions of the submit event that may not be desired. for example, submit event immediately refreshes the page. this can be prevented with the following:
    event.preventDefault();
    let firstName = form["first-name"].value;
    let lastName = form["last-name"].value;
    let birthDate = form["birth-date"].value;
    let age = form.age.value;
    let favoriteColor = form.color.value;
    let password = form.password.value;
    let gender = form.gender.value;

    form["first-name"].value = "";
    form["last-name"].value = "";
    form["birth-date"].value = "";
    form.age.value = "";

    // create new html element
    p = document.createElement("p");
    // add text
    p.textContent = "hello " + firstName + " " + lastName + ", who is a " + gender + " with a birthday of " + birthDate + " and a favorite color (in hex format) of " + favoriteColor + ". Your age is " + age + " and password is " + password;
    // add to DOM
    document.getElementsByTagName("body")[0].append(p);

    let favoriteFoods = ""

    for (let selection of form.food) {
        if (selection.checked){
            favoriteFoods += ", " + selection.value;
        }
    }

    // create new html element
    p = document.createElement("p");
    // add text
    p.textContent = "This person's favorite foods are: " + favoriteFoods;
    // add to DOM
    document.getElementsByTagName("body")[0].append(p);

    // create new html element
    p = document.createElement("p");
    // add text
    p.textContent = "This person wants to visit " + form.city.value;
    // add to DOM
    document.getElementsByTagName("body")[0].append(p);

})
