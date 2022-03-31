
// **based on CSS syntax**

// querySelector
// Selects a single element from page, regardless of how many matches (first match is the one that is returned)
let singleResult = document.querySelector("ol#favorite-things > li");
console.log(singleResult.textContent);


// querySelectorAll
// Selects ALL elements from page that match query.
let allResults = document.querySelectorAll("ol#favorite-things > li");
console.log(allResults[0].textContent);

for (let element of allResults) {
    element.textContent = "redacted";
}

for (let element of allResults) {
    console.log(element.textContent);
}
