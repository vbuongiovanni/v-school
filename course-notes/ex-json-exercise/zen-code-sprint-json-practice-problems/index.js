
// https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5

// define json:

const cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
        {
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
        }, 
        {
            name: "foo",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3
        }   
    ]
}
   


// Basic Tasks:

    // Add height and weight to Fluffy
    console.log("");
    console.log("Add height and weight to Fluffy");
    cat.height = 10;
    cat.weight = 7;
    console.log("new height: " + cat.height);
    console.log("new weight: " + cat.weight);

    // Fluffy name is spelled wrongly. Update it to Fluffyy
    console.log("");
    console.log("Fluffy name is spelled wrongly. Update it to Fluffyy");

    console.log("Before: " + cat.name);
    cat.name = "Fluffyy";
    console.log("after: " + cat["name"]);

    // List all the activities of Fluffyy’s catFriends.
    console.log("");
    console.log("Print the catFriends names.");

    for (let catFriend of cat.catFriends){
        console.log(catFriend.name + "'s activites:");
        for (let activity of catFriend.activities){
            console.log(activity);
        }
        console.log("");

    }

    // Print the catFriends names.
    console.log("");
    console.log("Print the catFriends names.");
    for (let catFriend of cat.catFriends){
        console.log(catFriend.name);
    }

    // Print the total weight of catFriends
    console.log("");
    console.log("Print the total weight of catFriends");
    let totalWeight = 0;
    for (let catFriend of cat.catFriends){
        
        totalWeight += catFriend.weight;
    }
    console.log("total weight of catFriends is " + totalWeight);

    // Print the total activities of all cats
    console.log("");
    console.log("Print the total activities of all cats: ");
    console.log(cat.name + "'s activites:");
    for (let activity of cat.activities){
        console.log(activity);
    }

    for (let catFriend of cat.catFriends){
        console.log(catFriend.name + "'s activites:");
        for (let activity of catFriend.activities){
            console.log(activity);
        }
        console.log("");

    }

    // Add 2 more activities to bar & foo cats
    console.log("");
    console.log("Add 2 more activities to bar & foo cats");
    console.log(cat.catFriends[0]);
    cat.catFriends[0].activities[2] = "eating";
    cat.catFriends[0].activities[3] = "chasing mice";

    cat.catFriends[1].activities[2] = "eating";
    cat.catFriends[1].activities[3] = "chasing mice";

    for (let catFriend of cat.catFriends){
        console.log(catFriend.name + "'s activites:");
        for (let activity of catFriend.activities){
            console.log(activity);
        }
        console.log("");

    }

    // Update the fur color of bar
    console.log("");
    console.log("Add 2 more activities to bar & foo cats");

    for (let catFriend of cat.catFriends) {
        if(catFriend.name === "bar"){
            catFriend.furcolor = "brown-ish";
        }
        console.log(catFriend.name + " has " + catFriend.furcolor + " colored hair.")
    }





    


