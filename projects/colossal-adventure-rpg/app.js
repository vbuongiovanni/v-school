'use strict'
// 

const readlineSync = require("readline-sync");

// Constructors:

const GenerateEnemy = function(name, attack, defense, lootConsumableProb, lootStandardProb, lootEpicProb, isAlive, currentLifePoints, maxLifePoints) {
    this.name = name;
    this.attack = {quality : attack};
    this.defend = {quality : defense};
    this.lootConsumableProb = lootConsumableProb;
    this.lootStandardProb = lootStandardProb;
    this.lootEpicProb = lootEpicProb;
    this.isAlive = isAlive;
    this.currentLifePoints = currentLifePoints;
    this.maxLifePoints = maxLifePoints;
}

const lootItem = function(name, type, quality) {
    this.name = name;
    this.type = type;
    this.quality = quality;
}

// initializing namedEnemies:

    const thug = new GenerateEnemy('Street Thug', 'Low', 'Low', 'Medium', 'Low', '', true, 100, 100);
    const medusa = new GenerateEnemy('Medusa', 'High', 'High', 'High', 'High', 'Medium', true, 750, 750);
    const death = new GenerateEnemy('Death', 'Low', 'High', 'High', 'High', 'Medium', true, 600, 600);
    const hades = new GenerateEnemy('Hades', 'Very High', 'Very High', 'High', 'Very High', 'Very High', true, 1000, 1000);
    

// initializing items:

    const level1Armor = new lootItem("Rusty Armor", "Armor", "Low");
    const level1Shield = new lootItem("Rusty Shield", "Shield", "Low");
    const level1Shoes = new lootItem("Torn cloth shoes", "Shoes", "Low");
    const level1Sword = new lootItem("Rusty Sword", "Sword", "Low");

    const level2Armor = new lootItem("Iron Armor", "Armor", "Medium");
    const level2Shield = new lootItem("Iron Shield", "Shield", "Medium");
    const level2Shoes = new lootItem("Cloth shoes", "Shoes", "Medium");
    const level2Sword = new lootItem("Iron Sword", "Sword", "Medium");

    const level3Armor = new lootItem("Steel Armor", "Armor", "High");
    const level3Shield = new lootItem("Steel Shield", "Shield", "High");
    const level3Shoes = new lootItem("Leather Sandals", "Shoes", "High");
    const level3Sword = new lootItem("Steel Sword", "Sword", "High");

    const level4Armor = new lootItem("Titanium Armor", "Armor", "Very High");
    const level4Shield = new lootItem("Titanium Shield", "Shield", "Very High");
    const level4Shoes = new lootItem("Gladiator's Sandals", "Shoes", "Very High");
    const level4Sword = new lootItem("Titanium Sword", "Sword", "Very High");

    const epicArmor = new lootItem("Achilles' Armor", "Armor", "Epic");
    const epicShield = new lootItem("Aegis", "Shield", "Epic");
    const epicShoes = new lootItem("The Talaria of Mercury", "Shoes", "Epic");
    const epicSword = new lootItem("King Leonidas' Sword", "Sword", "Epic");

// Initializing player object

const player = {
    name : "Player",
    defend : level1Armor,
    parry : level1Shield,
    run : level1Shoes,
    attack : level1Sword,
    currentLifePoints : 500,
    maxLifePoints : 500,
    inventory : ["Small Health Potion"]
}

const opponent = thug;
const attacker = player;

// function will reduce opponent's currentLifePoints by computed amount and produce applicable dialogue.
const attack = function(attacker, opponent){

    let attackQuality = attacker.attack.quality;
    let defendQuality = opponent.defend.quality;
    let attackMin = 0;
    let attackMax = 0;
    let attackFactor = 1;
    let defendFactor = 1;

    switch(attackQuality) {
        case "Low": 
            attackFactor = 1;
            attackMin = 5;
            attackMax = 25;
            break;
        case "Medium": 
            attackFactor = 1.5;
            attackMin = 15;
            attackMax = 50;
            break;
        case "High": 
            attackFactor = 2;
            attackMin = 60;
            attackMax = 100;
            break;
        case "Epic": 
            attackFactor = 4;
            attackMin = 100;
            attackMax = 250;
            break;
    } 

    switch(defendQuality) {
        case "Low": 
            defendFactor = .5;
            break;
        case "Medium": 
            defendFactor = 1.5;
            break;
        case "High": 
            defendFactor = 2;
            break;
        case "Epic": 
            defendFactor = 4;
            break;
    } 

    let attackValue = Math.random() * ((attackMax - attackMin + 1) + attackMin);
    attackValue = Math.round(attackValue * (attackFactor / defendFactor), 0);
    opponent.currentLifePoints = opponent.currentLifePoints - attackValue;
    console.log(`${opponent.name} took a ${attackValue} point hit, leaving ${Math.max(0, opponent.currentLifePoints)} out of ${opponent.maxLifePoints} remaining!`);
    if (opponent.currentLifePoints <= 0){
        opponent.isAlive = false;
        console.log(opponent.name + " is dead.")
    }
}

// function will return 'false' if escaped or 'true' if escape failed. Also will produce applicable dialogue
const run = function(attacker, opponent){
    let runQuality = attacker.run.quality;
    let randomProb = Math.random();
    switch(runQuality) {
        case "Low": 
            randomProb += .025;
            break;
        case "Medium": 
            randomProb += .10;
            break;
        case "High": 
            randomProb += .05;
            break;
        case "Epic": 
            randomProb += .75;
            break;
    } 
    
    if (randomProb > .5) {
        console.log("That was close, but you managed to escape the battle, but not before the " + opponent.name + " could get one last hit...");
        return false;
    } else {
        "Damn! You were too slow to escape. If only you had some better shoes..."
        return true;
    }
}

// will either attack twice, if successful, or nothing.
const parry = function(attacker, opponent){
    let parryQuality = attacker.parry.quality;
    let defendQuality = opponent.attack.quality;
    let parryFactor = 1;
    let defendFactor = 1;

    switch(parryQuality) {
        case "Low": 
            parryFactor = 1;
            break;
        case "Medium": 
            parryFactor = 1.5;
            break;
        case "High": 
            parryFactor = 2;
            break;
        case "Epic": 
            parryFactor = 4;
            break;
    } 

    switch(defendQuality) {
        case "Low": 
            defendFactor = 1;
            break;
        case "Medium": 
            defendFactor = 1.5;
            break;
        case "High": 
            defendFactor = 2;
            break;
        case "Epic": 
            defendFactor = 4;
            break;
    } 

    let randomProb = Math.random() * (parryQuality / defendQuality);

    if (randomProb > .5) {
        console.log(`${attacker.name} deflected ${opponent.name}'s strike and bashed them with their shield leaving ${opponent.name} reeling and disoriented. ${attacker.name} attacks twice!`)
        attack(attacker, opponent)
        attack(attacker, opponent)
    } else {
        console.log(`${attacker.name} failed to deflect ${opponent.name}'s strike.`)
    }
}


// Allows items in inventory to be used.
const inventory = function(){
    let inInventory = true;
    let userInput;
    let selectedItem;
    while(inInventory) {
        console.log("\n**Inventory**")
        console.log("\nEnter a number to use an item, or enter 'e' to exit the inventory:")
        
        let itemNumber = 1;
        for (let item of player.inventory){
            console.log(`[${itemNumber}]: ${item}`)
            itemNumber++
        }
        userInput = readlineSync.question(``);

        
        if (userInput === "e") {
            inInventory = false;
            break
        }

        selectedItem = player.inventory[parseInt(userInput) - 1];
        player.inventory.splice(player.inventory.indexOf(selectedItem), 1);

        switch (selectedItem){
            case "Small Health Potion":
                player.currentLifePoints += 25;
                break;
            case "Medium Health Potion":
                player.currentLifePoints += 50;
                break;
            case "Large Health Potion":
                player.currentLifePoints += 200;
                break;
            case "A 'Liter of' Health Potion":
                player.currentLifePoints == player.maxLifePoints;
                break;
        }
        
        console.log(`${player.name}'s health is now ${player.currentLifePoints}.`)
    }
}

// Draw Loot Items
const drawLootItem = function(opponent){

    let consumableLootCoeff = math.random();
    let standardLootCoeff = math.random();
    let EpicLootCoeff = math.random();

    opponent.lootConsumableProb;
    opponent.lootStandardProb;
    opponent.lootEpicProb;

    switch(parryQuality) {
        case "Low": 
            parryFactor = 1;
            break;
        case "Medium": 
            parryFactor = 1.5;
            break;
        case "High": 
            parryFactor = 2;
            break;
        case "Epic": 
            parryFactor = 4;
            break;
    } 



}

// walk function
const walk = function(){

}

// printInfo Function
const printInfo = function(){

}

const battleCommands = {
    a : attack,
    d : parry,
    r : run,
    i : inventory,
}

const nonBattleCommands = {
    w : walk,
    p : printInfo,
    i : inventory,
}




const battle = function(attacker, opponent) {

    console.log("You're in battle with " + opponent.name + "!");
    let inBattle = true;
    let userInput;
    let commandResult;

    while(inBattle) {
        
        userInput = readlineSync.question(`\nSelect and option:\nAttack: 'a'\nDeflect and Counter-Attack: 'd'\nRun away: 'r'\nInventory: 'i'\n`);

        if (userInput === "i") {
            inventory();
        } else {
            let command = battleCommands[userInput];
            commandResult = command(attacker, opponent);
            if (attacker.isAlive === false | opponent.isAlive === false) {
                break;
            }
            attack(opponent, attacker)
            if (attacker.isAlive === false | opponent.isAlive === false) {
                inBattle = false
                break;
            }
            // if player successfully runs away, command() will return 'false'. In order to not break encapsulation, this is checked here:
            if (commandResult === false) {
                inBattle = false;
            }
        }
    }

    // if battle is over and opponent is dead, then run drawLootItem() function:
    if (inBattle === false & opponent.isAlive === false){
        console.log("The battle is over! You have won.");
        drawLootItem(opponent)
    }
}

battle(attacker, opponent)
