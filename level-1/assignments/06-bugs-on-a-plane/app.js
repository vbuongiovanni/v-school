let form = document["airline-form"];

function formAlert(e) {
    e.preventDetault;

    console.log("itworked");
    let firstName = form["first-name"].value;
    let lastName = form["last-name"].value;
    let age = form["age"].value;
    let gender = form["gender"].value;
    let location = form["travel-location"].value;
    let diet = [];

    if (form['vegan'].checked) {
     diet.push(form['vegan'].value);
    }
    if (form['gluten-free'].checked) {
     diet.push(form['gluten-free'].value);
    }
    if (form['paleo'].checked) {
     diet.push(form['paleo'].value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

form.addEventListener("submit", formAlert);