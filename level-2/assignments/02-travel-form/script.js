// You just started your own airline, and you need to create a form to collect data about your passengers'
// upcoming travel plans so they can book their flight.

// You should collect the following information from the user:

// - First name (text input)
// - Last name (text input)
// - Age (number input)
// - Gender (radio buttons with 2 or more options)
// - Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// - Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

// Each element of the form should be given a `name` attribute so you can access the data in JavaScript and do stuff with it.

// There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:

const form = document["flight-info"];

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let checkedSelections = [];
    let dietaryRestrictions = form["dietary-restrictions"];

    for (let selection of dietaryRestrictions) {
        if (selection.checked) {
            checkedSelections.push(selection.value)
        }
    }

    
    
    alert(`
        First name: ${form["first-name"].value}
        Last name: ${form["last-name"].value}
        Age: ${form.age.value}
        Gender: ${form.gender.value}
        Location: ${form["location"].value}
        Dietary Restrictions: ${checkedSelections.join(", ")}
    `)

    form["first-name"].value = "";
    form["last-name"].value = "";
    form["age"].value = "";
    form["first-name"].value = "";
    form["first-name"].value = "";


})
