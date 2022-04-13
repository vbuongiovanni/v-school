'use strict'
const readlineSync = require("readline-sync");

// Constructors functions

    const Enemy = function(name, attack, defense, lootConsumableProb, lootStandardProb, lootEpicProb, currentLifePoints) {
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

    const Item = function(name, type, quality) {
        this.name = name;
        this.type = type;
        this.quality = quality;
    }

// declaring prototype for Enemy constructor:

    const EnemyPrototype = {
        // 1) that will add the enemy to a given array if it isAlive is true
        addIfAlive(enemies) {
            if(this.isAlive){
                enemies.push(this)
            }
        }
    }

    Enemy.prototype = EnemyPrototype;

// initializing named enemies - defined as env objects since they can only be killed once:

    const giant = new Enemy("The Giant", "Low", "Epic", "High", "Very High", "Medium", 750)
    const madWizard = new Enemy("Mad Wizard", "High", "Medium", "High", "Very High", "High", 250)
    const medusa = new Enemy("Medusa", "High", "High", "Very High", "High", "Very High", 500)
    const death = new Enemy("Death", "Low", "High", "Very High", "Very High", "Very High", 750)
    const hades = new Enemy("Hades", "Very High", "Epic", "Very High", "Very High", "Very High", 1000)

// creating functions to expedite generation of unnamed enemies

    const initializeUnnamedEnemy = function(enemyName) {
        let enemy;
        switch(enemyName){
            case "Street Thug":
                enemy = new Enemy("Street Thug", "Low", "Low", "Medium", "Low", "Zero", 250)
                break;
            case "Corrupt Guard":
                enemy = new Enemy("Corrupt Guard", "Medium", "Low", "Medium", "Medium", "Zero", 400)
                break;
            case "Dragon":
                enemy = new Enemy("Dragon", "High", "Low", "High", "Medium", "Low", 500)
                break;
            case "Evil Minion":
                enemy = new Enemy("Evil Minion", "Medium", "Medium", "High", "High", "Low", 500)
                break;
            case "Evil Ghoul":
                enemy = new Enemy("Evil Ghoul", "Low", "Medium", "High", "High", "Low", 500)
                break;
            default:
                console.log("UNKNOWN INPUT GIVEN TO SWITCH STATEMENT, CHECK initializeUnnamedEnemy FUNCTION");
            }
        
        return enemy;
    }

    const repeatEnemyInitialization = function(enemyName, numberEnemies){
        let enemies = [];
        for(let i = 0; i < numberEnemies; i++){
            enemies.push(initializeUnnamedEnemy(enemyName));
        }

        return enemies;
    }

// initializing non-consumable items:

    const level1Armor = new Item("Rusty Armor", "Armor", "Low");
    const level1Shield = new Item("Rusty Shield", "Shield", "Low");
    const level1Shoes = new Item("Torn cloth shoes", "Shoes", "Low");
    const level1Sword = new Item("Rusty Sword", "Sword", "Low");

    const lowLoot = [level1Armor, level1Shield, level1Shoes, level1Sword];

    const level2Armor = new Item("Iron Armor", "Armor", "Medium");
    const level2Shield = new Item("Iron Shield", "Shield", "Medium");
    const level2Shoes = new Item("Cloth shoes", "Shoes", "Medium");
    const level2Sword = new Item("Iron Sword", "Sword", "Medium");

    const mediumLoot = [level2Armor, level2Shield, level2Shoes, level2Sword];

    const level3Armor = new Item("Steel Armor", "Armor", "High");
    const level3Shield = new Item("Steel Shield", "Shield", "High");
    const level3Shoes = new Item("Leather Sandals", "Shoes", "High");
    const level3Sword = new Item("Steel Sword", "Sword", "High");

    const highLoot = [level3Armor, level3Shield, level3Shoes, level3Sword];

    const level4Armor = new Item("Titanium Armor", "Armor", "Very High");
    const level4Shield = new Item("Titanium Shield", "Shield", "Very High");
    const level4Shoes = new Item("Gladiator's Sandals", "Shoes", "Very High");
    const level4Sword = new Item("Titanium Sword", "Sword", "Very High");

    const veryHighLoot = [level4Armor, level4Shield, level4Shoes, level4Sword];

    const epicArmor = new Item("Achilles' Armor", "Armor", "Epic");
    const epicShield = new Item("Aegis", "Shield", "Epic");
    const epicShoes = new Item("The Talaria of Mercury", "Shoes", "Epic");
    const epicSword = new Item("King Leonidas' Sword", "Sword", "Epic");

    const epicLoot = [epicArmor, epicShield, epicShoes, epicSword];

// Initializing Env variables:

    // player object

    const player = {
        name : "Player",
        defend : level1Armor,
        parry : level1Shield,
        run : level1Shoes,
        attack : level1Sword,
        currentLifePoints : 1000,
        maxLifePoints : 1000,
        isAlive : true,
        location: 0,
        inventory : ["Small Health Potion", "Small Health Potion"]
    }

    // current location name

    let locationName = "Town";

// function will reduce opponent's currentLifePoints by computed amount and produce applicable dialogue.
const attack = function(attacker, opponent, returnResult = false){
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
        case "Very High": 
            attackFactor = 3;
            attackMin = 90;
            attackMax = 150;
            break;
        case "Epic": 
            attackFactor = 4;
            attackMin = 100;
            attackMax = 250;
            break;
        default:
            console.log(`UNKNOWN INPUT (${attackQuality}) IN SWITCH STATEMENT, CHECK attack FUNCTION`);
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
        case "Very High": 
            defendFactor = 3;
            break;
        case "Epic": 
            defendFactor = 4;
            break;
        default:
            console.log(`UNKNOWN INPUT (${defendQuality}) IN SWITCH STATEMENT, CHECK attack FUNCTION`);
    } 

    let attackValue = randomBetween(attackMin, attackMax);
    attackValue = Math.round(attackValue * (attackFactor / defendFactor), 0);

    if (attacker.name === player.name) {
        attackValue = attackValue * 2;
    } else {
        attackValue = attackValue / 2;
    }

    opponent.currentLifePoints = opponent.currentLifePoints - attackValue;
    console.log(`${opponent.name} took a ${attackValue} point hit, leaving ${Math.max(0, opponent.currentLifePoints)} out of ${opponent.maxLifePoints}!`);

    if (opponent.currentLifePoints <= 0){
        opponent.isAlive = false;
        console.log(opponent.name + " is dead.")
    }

    // return result - for testing purposes only

    if (returnResult === true) {
        return attackValue;
    }
}



// function will return 'false' if escaped or 'true' if escape failed. Also will produce applicable dialogue
    const run = function(attacker, opponent){
        let runQuality = attacker.run.quality;
        let randomProb = Math.random();

        switch(runQuality) {
            case "Low": 
                randomProb = randomProb + .025;
                break;
            case "Medium": 
                randomProb = randomProb + .05;
                break;
            case "High": 
                randomProb = randomProb + .125;
                break;
            case "Very High": 
                randomProb = randomProb + .25;
                break;
            case "Epic": 
                randomProb = randomProb + .49;
                break;
            default:
                console.log(`UNKNOWN INPUT (${runQuality}) IN SWITCH STATEMENT, CHECK run FUNCTION`);
        } 
        
        if (randomProb > .5) {
            console.log("That was close, but you managed to escape the battle.. However, " + opponent.name + " managed to get one last hit on you while fleeing...");
            return false;
        } else {
            console.log("Damn! You were too slow to escape. If only you had some better shoes...")
            return true;
        }
    }

// will either attack twice, if successful, or nothing.
    const parry = function(attacker, opponent, returnResult = false){
        let parryQuality = attacker.parry.quality;
        let defendQuality = opponent.defend.quality;
        let parryFactor;
        let defendFactor;

        switch(parryQuality) {
            case "Low": 
                parryFactor = 1;
                break;
            case "Medium": 
                parryFactor = 1.5;
                break;
            case "High": 
                parryFactor = 3;
                break;
            case "Very High": 
                parryFactor = 6;
                break;
            case "Epic": 
                parryFactor = 9;
                break;
            default:
                console.log(`UNKNOWN INPUT (${parryQuality}) IN SWITCH STATEMENT, CHECK parry FUNCTION`);
        } 

        switch(defendQuality) {
            case "Low": 
                defendFactor = .75;
                break;
            case "Medium": 
                defendFactor = 1;
                break;
            case "High": 
                defendFactor = 1.5;
                break;
            case "Very High": 
                defendFactor = 1.75;
                break;
            case "Epic": 
                defendFactor = 2;
                break;
            default:
                console.log(`UNKNOWN INPUT (${defendQuality}) IN SWITCH STATEMENT, CHECK parry FUNCTION`);
        } 

        let randomProb = Math.random() * (parryFactor / defendFactor);

        if (randomProb > .5) {
            console.log(`${attacker.name} deflected ${opponent.name}'s strike leaving them reeling and disoriented. ${attacker.name} attacks twice!`)
            attack(attacker, opponent)
            attack(attacker, opponent)
        } else {
            console.log(`${attacker.name} failed to deflect the strike from ${opponent.name}.`)
        }

        // return result - for testing purposes only

        if (returnResult === true) {
            return randomProb > .5;
        }
    }

// Allows items in inventory to be used.
    const inventory = function(){
        let inInventory = true;
        let userInput;
        let selectedItem;
        let itemNumber = 1;
        while(inInventory) {
            console.log("\n**Inventory**")
            console.log("\nEnter a number to use an item, or enter 'e' to exit the inventory:")
            
            for (let item of player.inventory){
                console.log(`[${itemNumber}]: ${item}`)
                itemNumber++
            }

            userInput = readlineSync.question(``);
            if (userInput === "e") {
                inInventory = false;
                break
            }

            if (isFinite(userInput) & userInput > 0) {
                selectedItem = player.inventory[parseInt(userInput) - 1];
                player.inventory.splice(player.inventory.indexOf(selectedItem), 1);
                switch (selectedItem){
                    case "Small Health Potion":
                        player.currentLifePoints += 100;
                        break;
                    case "Medium Health Potion":
                        player.currentLifePoints += 250;
                        break;
                    case "Large Health Potion":
                        player.currentLifePoints += 500;
                        break;
                    case "A 'Liter of' Health Potion":
                        player.currentLifePoints == player.maxLifePoints;
                        break;
                    default:
                        console.log(`UNKNOWN INPUT (${selectedItem}) IN SWITCH STATEMENT, CHECK inventory FUNCTION`);
                }

                player.currentLifePoints = Math.min(player.currentLifePoints, player.maxLifePoints);
                console.log(`${player.name}'s health is now ${player.currentLifePoints}.`)
            }

        }
    }

// supporting function = will generate a random number between min and max. shouldFloor is an optional argument that will perform Math.floor before returning
// TO DO - MOVE THIS FUNCTION TO BOTTOM, SHOULDN'T HURT ANYHTING
function randomBetween(min, max, shouldFloor = false) {
    let output = Math.random() *  ((max - min + 1) + min);
    if (shouldFloor === true) {
        return Math.floor(output);
    } else {
        return output;
    }
}

// Draw Loot Items - given a defeated opponent, this function will equip new items to player (assuming loot item is better than existing item)
const retrieveLootItems = function(opponent){

    let standardLootRandNumber = Math.random();
    let epicLootRandNumber = Math.random();
    let getEpicLoot = false;
    let awardedStandardLoot;
    let awardedLoot = [];

    // draw Epic Loot outcome:

    switch(opponent.lootEpicProb) {
        case "Zero": 
            getEpicLoot = false;
            break;
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
        default:
            console.log(`UNKNOWN INPUT (${opponent.lootEpicProb}) IN SWITCH STATEMENT, CHECK retrieveLootItems FUNCTION`);
    } 

    if (getEpicLoot === true & epicLoot.length > 0){
        awardedLoot.push(epicLoot.splice(
            randomBetween(0, (epicLoot.length - 1), true),
            1
        )[0]);
    } 

    // draw standard Loot outcome:

    switch(opponent.lootStandardProb) {
        case "Low": 
            if (standardLootRandNumber >= .7) {
                awardedStandardLoot = lowLoot.splice(
                    randomBetween(0, (lowLoot.length - 1), true), 1
                    )[0];
                awardedLoot.push(awardedStandardLoot)
            }

            if (standardLootRandNumber >= .3) {
                awardedStandardLoot = mediumLoot.splice(
                    randomBetween(0, (mediumLoot.length - 1), true), 1
                    )[0];
                awardedLoot.push(awardedStandardLoot)
            }
            
            break;
        case "Medium": 
            if (standardLootRandNumber >= .2) {
                awardedStandardLoot = mediumLoot.splice(
                    randomBetween(0, (mediumLoot.length - 1), true), 1
                    )[0];
                awardedLoot.push(awardedStandardLoot)
            }
            
            break;
        case "High": 
            if(standardLootRandNumber >= .1) {
                awardedStandardLoot = highLoot.splice(
                    randomBetween(0, (highLoot.length - 1), true), 1
                    )[0];
                awardedLoot.push(awardedStandardLoot)
            }
            
            break;
        case "Very High": 
            if(standardLootRandNumber >= .05) {
                awardedStandardLoot = veryHighLoot.splice(
                    randomBetween(0, (veryHighLoot.length - 1), true), 1
                    )[0];
                awardedLoot.push(awardedStandardLoot)
            }
            break;
        default:
            console.log(`UNKNOWN INPUT (${opponent.lootStandardProb}) IN SWITCH STATEMENT, CHECK retrieveLootItems FUNCTION`);

    } 

    if (awardedLoot.length === 0 | awardedLoot[0] === undefined) {
        console.log(`\nYou dig through ${opponent.name}'s belongings, but there isn't anything of value.`)
    } else {
        console.log(`\nYou dig through ${opponent.name}'s belongings for loot and find:`)
        
        for (let item of awardedLoot){
            if (item === undefined) {
                continue;
            } else {
                if (item.quality === "Epic"){
                    console.log(`${item.name}, ${item.type} of ${item.quality} quality!`);
                } else {
                    console.log(`A ${item.name} of ${item.quality} quality.`);
                }
                equipItem(item);
            }
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
                console.log(`UNKNOWN INPUT (${itemType}) IN SWITCH STATEMENT, CHECK equipItem FUNCTION`);
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
                willGetConsumable = RandNumber <= .50 ? true : false;
                availableLoot = ["Small Health Potion", "Small Health Potion", "Small Health Potion", "Small Health Potion", "Medium Health Potion"]
                break;
            case "Medium": 
                willGetConsumable = RandNumber <= .60 ? true : false;
                availableLoot = ["Small Health Potion", "Small Health Potion", "Medium Health Potion", "Medium Health Potion", "Medium Health Potion"]
                break;
            case "High": 
                willGetConsumable = RandNumber <= .70 ? true : false;
                availableLoot = ["Medium Health Potion", "Medium Health Potion", "Medium Health Potion", "Large Health Potion", "Large Health Potion",
                                "Small Health Potion", "Small Health Potion", "Medium Health Potion", "Medium Health Potion", "Medium Health Potion"]
                break;
            case "Very High": 
                willGetConsumable = RandNumber <= .80 ? true : false;
                availableLoot = ["Large Health Potion", "Large Health Potion", "Large Health Potion", "Liter Health Potion", "Liter of Health Potion",
                                "Medium Health Potion", "Medium Health Potion", "Medium Health Potion", "Large Health Potion", "Large Health Potion"]
                break;
            default:
                console.log(`UNKNOWN INPUT (${opponent.lootConsumableProb}) IN SWITCH STATEMENT, CHECK retrieveConsumableItems FUNCTION`);
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
            console.log(`\n${opponent.name} dropped some consumable items!\nThe following have been added to your inventory:`)
            for (let consumable of awardedLoot){
                console.log(consumable);
                player.inventory.push(consumable);
            }
            
        }

    }

// startDialog function - prints intro, allows player to name themselves
    const startDialog = function(){
        console.log("Town Citizen: 'Ohh traveler, You must be lost - nobody in their right mind would come to these parts... Our lands are plagued by an unholy evil.'");
        console.log("\nYou: 'Have you ever considered just moving away? I heard Fiji is nice this time of the year.'");
        console.log("\nTown Citizen: 'We could... but I have another idea - what if you vanquish the evil? If you are victorious, there will sure be invaluable treasures, fame, and notoriety. What is it you said your name was again?'");
        player.name = readlineSync.question("Enter Your Name:\n");
        console.log(`\nYou: '"Invaluable treasures" you say... Alright. I'm in.'`);
        console.log(`You: 'My name is ${player.name} - get to work on my monuments because I am going to defeat the evil, save the town, and get that treasure!`); 
        console.log(`\nTown Citizen: 'Excellent - bless you, ${player.name}! I will notify the monument team..... after you depart town...'`);
        console.log("\nTown Citizen: 'You will need to travel from our humble town, through the forests, into the cave of despair. Vanquish Hades and his two friends - Death and Medusa. Ohhh and while you are at it, can you whack the Mad Wizard and The Giant?'");
        console.log("\nYou: 'Sure, whatever. Your monument people use marble, right?'");
        console.log("\nTown Citizen: 'Uhh..... yes...'");
    }

// draw enemy function - based on player's location, will determine 1.) if an enemy is present and 2.) which enemy it is. 
// If present, the drawn enemy from the enemyPool will be returned
    const drawEnemy = function(playerLocation){

        let enemyPool = [];
        let output;
        let randomNumber = Math.random();
        let isEnemyPresent;

        if (playerLocation < 4) {

            locationName = "Town";
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Street Thug", 3));
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Corrupt Guard", 1));
            isEnemyPresent = randomNumber > .5 ? true : false;

        } else if (playerLocation < 8) {

            locationName = "Outskirts of Town";
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Street Thug", 2));
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Corrupt Guard", 2));
            isEnemyPresent = randomNumber > .4 ? true : false;

        } else if (playerLocation < 12) {

            locationName = "Goodish Forest";
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Street Thug", 1));
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Corrupt Guard", 5));
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Dragon", 1));
            isEnemyPresent = randomNumber > .35 ? true : false;

        } else if (playerLocation < 20) {

            locationName = "Dark Forest";
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Dragon", 1));
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Evil Minion", 3));
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Evil Ghoul", 3));
            giant.addIfAlive(enemyPool);
            madWizard.addIfAlive(enemyPool);
            isEnemyPresent = randomNumber > .3 ? true : false;

        } else if (playerLocation < 25) {

            locationName = "Cave of Despair";
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Dragon", 1));
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Evil Minion", 2));
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Evil Ghoul", 2));
            giant.addIfAlive(enemyPool);
            madWizard.addIfAlive(enemyPool);
            medusa.addIfAlive(enemyPool);
            death.addIfAlive(enemyPool);
            isEnemyPresent = randomNumber > .2 ? true : false;

        } else {

            locationName = "Hades' Crib";
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Evil Minion", 1));
            enemyPool = enemyPool.concat(repeatEnemyInitialization("Evil Ghoul", 1));
            giant.addIfAlive(enemyPool);
            madWizard.addIfAlive(enemyPool);
            medusa.addIfAlive(enemyPool);
            hades.addIfAlive(enemyPool);
            isEnemyPresent = randomNumber > .10 ? true : false;

        }

        if (isEnemyPresent) {
        
            output = enemyPool[randomBetween(0, (enemyPool.length - 1), true)];

        } else {

            output = "What a wonderful and uneventful walk!";

        }

        return output;
    }

// walk function - increment location, set name if applicable, and run drawEnemy function.
    const walk = function(){
        let walkOutcome;
        console.log("\n\n****Beginning Journey****\n");
        player.location += 1;

        if (player.location == 4) {

            console.log("You have entered the outskirts of town... It's kind of a rough neighborhood.\n")
        
        } else if (player.location == 8) {

            console.log("You have entered the Goodish Forest.\n")
        
        } else if (player.location == 12) {

            console.log("You have entered the Dark Forest.\n")
        
        } else if (player.location == 20) {

            console.log("You have entered the Cave of Despair.\n")
        
        } else if (player.location == 25) {

            console.log("You have entered the Hades' Crib.\n")
        
        }
        player.location = Math.min(player.location, 26);

        walkOutcome = drawEnemy(player.location);

        if (typeof walkOutcome === "string") {

            console.log(walkOutcome);
        
        } else {

            battle(player, walkOutcome);
        
        }

        console.log("\n\n");
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
        \n
        Current Location: ${locationName}
            `)
        console.log("    **Inventory**") 
        for (let item of player.inventory){
            console.log(`    ${item}`)
        }
        console.log("\n")
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

// implementation of battle functionality - will look until either character dies or if player runs away

    const battle = function(attacker, opponent) {

        console.log("You're in battle with " + opponent.name + "!");
        let inBattle = true;
        let userInput;
        let commandResult;

        while(inBattle) {
            userInput = readlineSync.question(`\nEnter an option:\nAttack: 'a'\nDeflect and Counter-Attack: 'd'\nRun away: 'r'\nSee Info: 'p'\nInventory: 'i'\n`);
            if (userInput === "p" | userInput === "Print") {

                printInfo();

            } else if (userInput === "i") {

                inventory();

            } else if (userInput === "a" | userInput === "r" | userInput === "d") {

                let command = battleCommands[userInput];
                commandResult = command(attacker, opponent);

                if (attacker.isAlive === false | opponent.isAlive === false) {
                    inBattle = false
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

            } else if (userInput === ".exit") {

                break;

            }
        }

        // if battle is over and opponent is dead, then run drawLootItem() function:
        if (inBattle === false & opponent.isAlive === false){
            console.log("\n\nThe battle is over! You have won.");
            retrieveLootItems(opponent);
            retrieveConsumableItems(opponent);
        }
    }

// main function - startDialog() and orchestrates the battle() and walk() functions

const launchGame = function(){
    startDialog()
    while (player.isAlive){
        console.log("\n\nHow would you like to proceed?");
        let userInput = readlineSync.question(`\nEnter an option:\nWalk: 'w'\nView Inventory: 'i'\nSee Info: 'p'\n`);
        let command;
        if (userInput === "Print") {
            printInfo();
        } else if (userInput === "i" | userInput === "p" | userInput === "w") {
            command = nonBattleCommands[userInput];
            command();
        } else if (userInput === ".exit") {
            break;
        }
    }

    if (player.isAlive === false) {
        console.log(`Our hero, ${player.name} has died.`);
    }
}

// player.currentLifePoints = Infinity;
launchGame();







/*  
// testing:
// testing:
// testing:

    player.name = "A REAL NAME"
    player.currentLifePoints = Infinity;

    const allEnemies = [hades, death, medusa, giant, madWizard,
        initializeUnnamedEnemy("Street Thug"),
        initializeUnnamedEnemy("Corrupt Guard"),
        initializeUnnamedEnemy("Dragon"),
        initializeUnnamedEnemy("Evil Minion"),
        initializeUnnamedEnemy("Evil Ghoul"),
    ];

    const allItems = lowLoot.concat(mediumLoot).concat(highLoot).concat(veryHighLoot).concat(epicLoot)
    const shoes = [level1Shoes, level2Shoes, level3Shoes, level4Shoes, epicShoes];
    const shields = [level1Shield, level2Shield, level3Shield, level4Shield, epicShield];

// confirm that all enemy loot settings are valid:

    for (let i = 0; i < 100; i++){
        for (let enemy of allEnemies) {
            retrieveLootItems(enemy);
            retrieveConsumableItems(enemy);
        }
    }

// confirm all items can be equipped and used

    for (item of allItems) {
        equipItem(item);
    }

// Record outcomes of all shoes and shields items:

    // disable console.log():
    const backupConsoleLog = console.log;
    console.log = function(){};

    let logShoeQuality = [];
    let logShoeOutcome = [];

    let logShieldEnemyDefense = [];
    let logShieldQuality = [];
    let logShieldOutcome = [];

    for (let i = 0; i < 10000; i++){
        for (let shoe of shoes) {
            logShoeQuality.push(shoe.quality);
            player.run = shoe;
            logShoeOutcome.push(run(player, allEnemies[0]));
        }

        for (let shield of shields) {
            player.parry = shield;
            for (let enemy of allEnemies) {
                logShieldQuality.push(shield.quality);
                logShieldEnemyDefense.push(enemy.defend.quality)
                logShieldOutcome.push(parry(player, enemy, true));   
            }
        }
    }
    console.log = backupConsoleLog;

    for (let i = 0; i < logShoeOutcome.length; i++){
        console.log(`${logShoeQuality[i]},${logShoeOutcome[i]}`)
    }
    // Shoe Quality	Success Instances	Prob. of Successful run:
    // Low	        5210	10000	    52.10%
    // Medium	    5503	10000	    55.03%
    // High	        6222	10000	    62.22%
    // Very High	7458	10000	    74.58%
    // Epic	        9921	10000	    99.21%

    for (let i = 0; i < logShieldOutcome.length; i++){
        console.log(`${logShieldQuality[i]},${logShieldEnemyDefense[i]},${logShieldOutcome[i]}`)
    }

    // Shield Quality	Enemy Defense Quality	Prob of Successful Deflect
    // Epic             Low                     95.85%
    // Epic	            Epic	                88.68%
    // Epic	            High	                91.49%
    // Epic	            Medium	                94.50%
    // Very High	    Low	                    93.76%
    // Very High	    Epic	                83.27%
    // Very High	    High	                87.61%
    // Very High	    Medium	                91.62%
    // High	            Epic	                67.10%
    // High	            Medium	                83.22%
    // High	            High	                75.07%
    // High	            Low	                    87.56%
    // Medium	        High	                50.26%
    // Medium	        Low	                    75.20%
    // Medium           Medium	                66.90%
    // Medium           Epic	                33.15%
    // Low	            High	                25.00%
    // Low	            Low	                    62.60%
    // Low	            Epic	                0.00%
    // Low	            Medium	                49.92%
 */






