
const form = document["price-form"];

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let goombaValue = parseInt(form["goomba-count"].value);
    let cheepCheepValue = parseInt(form["cheep-cheep-count"].value);
    let bobOmbValue = parseInt(form["bob-omb-count"].value);
    document.getElementById("total-cost").textContent = (goombaValue * 5) + (cheepCheepValue * 11) + (bobOmbValue * 7) + " Coins";
})
