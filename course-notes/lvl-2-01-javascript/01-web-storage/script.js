

// aside from their persitence properties, sessionStorage and localStorage are treated the exact same as far as these examples are concerned.



document.getElementById("save-session-storage").addEventListener("click", ()=> {
    sessionStorage.setItem("name", "steve");
    sessionStorage.setItem("age", 18);
    sessionStorage.setItem("isAlive", true);
    const friend = {name : "Pete", age : 18}

    sessionStorage.setItem("badFriend", friend);

    sessionStorage.setItem("friend", JSON.stringify(friend));
})

document.getElementById("log-session-storage").addEventListener("click", ()=> {
    console.log(sessionStorage.getItem("name"));
    console.log(sessionStorage.age);
    console.log(sessionStorage["isAlive"]);
    console.log("for complex data types, you need to use JSON.stringify(obj) to save, and JSON.parse(obj) to access or else you'll end up with something like this:");
    console.log(sessionStorage.badFriend)
    console.log("the JSON functions will get you this:");
    console.log(JSON.parse(sessionStorage.friend));
})

