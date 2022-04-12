'use strict'
// 

const readlineSync = require("readline-sync");

// Constructors:

const GenerateEnemy = function(name, attack, defense, lootConsumableProb, lootStandardProb, lootEpicProb, currentLifePoints) {
    this.name = name;
    this.attack = {quality : attack};
    this.defend = {quality : defense};
    this.lootConsumableProb = lootConsumableProb;
    this.lootStandardProb = lootStandardProb;
    this.lootEpicProb = lootEpicProb;
    this.isAlive = true;
    this.currentLifePoints = currentLifePoints;
    this.maxLifePoints = currentLifePoints;
}

const lootItem = function(name, type, quality) {
    this.name = name;
    this.type = type;
    this.quality = quality;
}

// initializing namedEnemies - defined as definitive objects, since they can only be found/killed once.

    const giant = new GenerateEnemy("The Giant", "Low", "Epic", "High", "Very High", "Moderate", 750)
    const madWizard = new GenerateEnemy("Mad Wizard", "High", "Medium", "High", "Very High", "High", 250)
    const medusa = new GenerateEnemy("Medusa", "High", "High", "Very High", "High", "Very High", 500)
    const death = new GenerateEnemy("Death", "Low", "High", "Very High", "Very High", "Very High", 750)
    const hades = new GenerateEnemy("Hades", "Very High", "Epic", "Very High", "Very High", "Very High", 1000)

// initializing function to generate new unnamed enemies, since they are instance variables.

    const initializeUnnamedEnemy = function(enemyName) {

        let enemy;

        switch(enemyName){
            case "Street Thug":
                enemy = new GenerateEnemy("Street Thug", "Low", "Low", "Medium", "Low", "", 250)
                break;
            case "Street Thug":
                enemy = new GenerateEnemy("Corrupt Guard", "Medium", "High", "Medium", "Medium", "", 400)
                break;
            case "Street Thug":
                enemy = new GenerateEnemy("Dragon", "Medium", "Low", "High", "Medium", "Low", 500)
                break;
            case "Street Thug":
                enemy = new GenerateEnemy("Evil Minion", "Medium", "Medium", "High", "High", "Low", 500)
                break;
            case "Street Thug":
                enemy = new GenerateEnemy("Evil Ghoul", "Low", "Medium", "High", "High", "Low", 500)
                break;
            }
        
        return enemy;

    }

// initializing items:

    const level1Armor = new lootItem("Rusty Armor", "Armor", "Low");
    const level1Shield = new lootItem("Rusty Shield", "Shield", "Low");
    const level1Shoes = new lootItem("Torn cloth shoes", "Shoes", "Low");
    const level1Sword = new lootItem("Rusty Sword", "Sword", "Low");

    const lowLoot = [level1Armor, level1Shield, level1Shoes, level1Sword];

    const level2Armor = new lootItem("Iron Armor", "Armor", "Medium");
    const level2Shield = new lootItem("Iron Shield", "Shield", "Medium");
    const level2Shoes = new lootItem("Cloth shoes", "Shoes", "Medium");
    const level2Sword = new lootItem("Iron Sword", "Sword", "Medium");

    const mediumLoot = [level2Armor, level2Shield, level2Shoes, level2Sword];

    const level3Armor = new lootItem("Steel Armor", "Armor", "High");
    const level3Shield = new lootItem("Steel Shield", "Shield", "High");
    const level3Shoes = new lootItem("Leather Sandals", "Shoes", "High");
    const level3Sword = new lootItem("Steel Sword", "Sword", "High");

    const highLoot = [level3Armor, level3Shield, level3Shoes, level3Sword];

    const level4Armor = new lootItem("Titanium Armor", "Armor", "Very High");
    const level4Shield = new lootItem("Titanium Shield", "Shield", "Very High");
    const level4Shoes = new lootItem("Gladiator's Sandals", "Shoes", "Very High");
    const level4Sword = new lootItem("Titanium Sword", "Sword", "Very High");

    const veryHighLoot = [level4Armor, level4Shield, level4Shoes, level4Sword];

    const epicArmor = new lootItem("Achilles' Armor", "Armor", "Epic");
    const epicShield = new lootItem("Aegis", "Shield", "Epic");
    const epicShoes = new lootItem("The Talaria of Mercury", "Shoes", "Epic");
    const epicSword = new lootItem("King Leonidas' Sword", "Sword", "Epic");

    const epicLoot = [epicArmor, epicShield, epicShoes, epicSword];

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

const opponent = initializeUnnamedEnemy("Street Thug");
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

    
    let attackValue = randomBetween(attackMin, attackMax);
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

// supporting function = will generate a random number between min and max. shouldFloor is an optional argument that will perform Math.floor before returning

function randomBetween(min, max, shouldFloor = false) {
    let output = Math.random() *  ((max - min + 1) + min);
    if (shouldFloor === true) {
        return Math.floor(output);
    } else {
        return output;
    }
}

// Draw Loot Items - given a defeated opponent, this function will equip items to player (assuming loot item is better than existing item)
const retrieveLootItems = function(opponent){

    let standardLootRandNumber = Math.random();
    let epicLootRandNumber = Math.random();
    let getEpicLoot = false;
    let awardedStandardLoot;
    let awardedLoot = [];

    // draw Epic Loot outcome:

    switch(opponent.lootEpicProb) {
        case "Low": 
            getEpicLoot = epicLootRandNumber >= .95 ? true : false;
            break;
        case "Medium": 
            getEpicLoot = epicLootRandNumber >= .80 ? true : false;
            break;
        case "High": 
            getEpicLoot = epicLootRandNumber >= .25 ? true : false;
            break;
        case "Very High": 
            getEpicLoot = epicLootRandNumber >= .00 ? true : false;
            break;
    } 

    if (getEpicLoot == true){
        awardedLoot.push(epicLoot.splice(
            randomBetween(0, (epicLoot.length - 1), true),
            1
        )[0]);
    } 

    // draw standard Loot outcome:

    switch(opponent.lootStandardProb) {
        case "Low": 
            if (standardLootRandNumber >= .80) {
                awardedStandardLoot = lowLoot.splice(
                    randomBetween(0, (lowLoot.length - 1), true), 1
                    )[0];
                awardedLoot.push(awardedStandardLoot)
            }
            
            break;
        case "Medium": 
            if (standardLootRandNumber >= .65) {
                awardedStandardLoot = mediumLoot.splice(
                    randomBetween(0, (mediumLoot.length - 1), true), 1
                    )[0];
                awardedLoot.push(awardedStandardLoot)
            }
            
            break;
        case "High": 
            if(standardLootRandNumber >= .5) {
                awardedStandardLoot = highLoot.splice(
                    randomBetween(0, (highLoot.length - 1), true), 1
                    )[0];
                awardedLoot.push(awardedStandardLoot)
            }
            
            break;
        case "Very High": 
            if(standardLootRandNumber >= .5) {
                awardedStandardLoot = veryHighLoot.splice(
                    randomBetween(0, (veryHighLoot.length - 1), true), 1
                    )[0];
                awardedLoot.push(awardedStandardLoot)
            }
            
            break;

    } 

    if (awardedLoot.length === 0) {
        console.log(`You dig through ${opponent.name}'s belongings, but there isn't anything of value.`)
    } else {
        console.log(`You dig through ${opponent.name}'s belongings for loot and find:`)
        
        for (let item of awardedLoot){
            if (item.quality === "Epic"){
                console.log(`${item.name}, ${item.type} of ${item.quality} quality!`);
            } else {
                console.log(`A ${item.name} of ${item.quality} quality.`);
            }
            equipItem(item);
        }
    }

}

// Draw consumable items (health potions) - given a defeated opponent, this function will add items to players inventory
const retrieveConsumableItems = function(opponent){

    let RandNumber = Math.random();
    let willGetConsumable = false;
    let awardedStandardLoot;
    let availableLoot = [];
    let awardedLoot = [];

    // draw consumable  Loot outcome:
    
    switch(opponent.lootConsumableProb) {
        case "Low": 
            willGetConsumable = RandNumber >= .50 ? true : false;
            availableLoot = ["Small Health Potion", "Small Health Potion", "Small Health Potion", "Small Health Potion", "Medium Health Potion"]
            break;
        case "Medium": 
            willGetConsumable = RandNumber >= .60 ? true : false;
            availableLoot = ["Small Health Potion", "Small Health Potion", "Medium Health Potion", "Medium Health Potion", "Medium Health Potion"]
            break;
        case "High": 
            willGetConsumable = RandNumber >= .70 ? true : false;
            availableLoot = ["Medium Health Potion", "Medium Health Potion", "Medium Health Potion", "Large Health Potion", "Large Health Potion",
                            "Small Health Potion", "Small Health Potion", "Medium Health Potion", "Medium Health Potion", "Medium Health Potion"]
            break;
        case "Very High": 
            willGetConsumable = RandNumber >= .80 ? true : false;
            availableLoot = ["Large Health Potion", "Large Health Potion", "Large Health Potion", "Liter Health Potion", "Liter of Health Potion",
                            "Medium Health Potion", "Medium Health Potion", "Medium Health Potion", "Large Health Potion", "Large Health Potion"]
            break;
        default:
            console.log("INVALID SWITCH ARGUMENT, SEE retrieveConsumableItems FUNCTION.");
    } 

    if (willGetConsumable == true){
        awardedLoot.push(availableLoot.splice(
            randomBetween(0, (availableLoot.length - 1), true),
            1
        )[0]);
        awardedLoot.push(availableLoot.splice(
            randomBetween(0, (availableLoot.length - 1), true),
            1
        )[0]);
    } 
 
    if (awardedLoot.length > 0) {
        console.log(`${opponent.name} dropped some consumable items!\nThe following have been added to your inventory:`)
        for (let consumable of awardedLoot){
            console.log(consumable);
            player.inventory.push(consumable);
        }
        
    }

}

// sub function of retrieveLootItems - will equip new items if they are of higher quality than what the player is currently using. Old equipment is discarded.

function equipItem(item){
    let itemType = item.type;
    let itemQuality = item.quality;
    let itemClass;
    let currentItem;
    let currentQuality;

    switch (itemType) {
        case "Sword": 
            itemClass = "attack";
            break;
        case "Shield": 
            itemClass = "parry";
            break;
        case "Shoes": 
            itemClass = "run";
            break;
        case "Armor": 
            itemClass = "defend";
            break;
        default:
            console.log("UNKNOWN EQUIPMENT TYPE, CHECK equipItem FUNCTION");
    }
    currentItem = player[itemClass];
    currentQuality = currentItem.quality;

    let isHigherQualityEpic = itemQuality === "Epic" & (currentQuality === "Low" | currentQuality === "Medium" | currentQuality === "High" | currentQuality === "Very High");
    let isHigherQualityVeryHigh = itemQuality === "Very High" & (currentQuality === "Low" | currentQuality === "Medium" | currentQuality === "High");
    let isHigherQualityHigh = itemQuality === "High" & (currentQuality === "Low" | currentQuality === "Medium"); 
    let isHigherQualityMedium = itemQuality === "Medium" & (currentQuality === "Low");

    if (isHigherQualityEpic | isHigherQualityVeryHigh | isHigherQualityHigh | isHigherQualityMedium) {
        player[itemClass] = item;
        console.log(`${player.name} equipped the ${player[itemClass].name}! To reserve your energy, you discard your old ${currentItem.name}`)
    } else {
        console.log(`${item.name} is of lesser quality than ${player[itemClass].name}. The item will not be equiped.`)
    }
}



// walk function
const walk = function(){

}

// printInfo Function - prints players name, HP, and all items in their inventory

const printInfo = function(){
    console.log(`
    Player Name: ${player.name}
    Health:      ${player.currentLifePoints} / ${player.maxLifePoints}
    Armor:       ${player.defend.name}
    Sword:       ${player.attack.name}
    Shield:      ${player.parry.name}
    Shoes:       ${player.run.name}
        `)
    console.log("    **Inventory**") 
    let itemNumber = 1;
    for (let item of player.inventory){
        console.log(`    [${itemNumber}]: ${item}`)
        itemNumber++
    }
}

// object containing commands for design pattern. Note that battleCommands require two arguments (attacker, opponent)
// while nonBattleCommands does not.

const battleCommands = {
    a : attack,
    d : parry,
    r : run
}

const nonBattleCommands = {
    w : walk,
    i : inventory,
    p : printInfo
}

const battle = function(attacker, opponent) {

    console.log("You're in battle with " + opponent.name + "!");
    let inBattle = true;
    let userInput;
    let commandResult;

    while(inBattle) {
        
        userInput = readlineSync.question(`\nSelect and option:\nAttack: 'a'\nDeflect and Counter-Attack: 'd'\nRun away: 'r'\nInventory: 'i'\n`);
        if (userInput === "p" | userInput === "Print") {
            printInfo();
        } else if (userInput === "i") {
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
        retrieveLootItems(opponent)
    }
}



printInfo()
retrieveConsumableItems(medusa);
retrieveConsumableItems(medusa);
printInfo()

