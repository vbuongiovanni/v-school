

class Player {
    constructor(name){
        this.name = name;
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
    }

    setName = (namePicked) => this.name;

    gotHit = () => {
        switch(this.status){
            case "Small" : 
                this.status = "Dead";
                console.log("You lost the game! You Died!");
                break;
            case "Big" : 
                this.status = "Small";
                break;
            case "Powered Up" : 
                if (this.hasStar === true) {
                    this.hasStar = false;
                    console.log("Your Star protected you!");
                } else {
                    this.status = "Big";
                }
                
                break;
        }
    }

    gotPowerup = () => {
        switch(this.status){
            case "Small" : 
                this.status = "Big";
                break;
            case "Big" : 
                this.status = "Powered Up";
                break;
            case "Powered Up" : 
                this.hasStar = true;
                console.log("Congratulations - you got a star!");
                break;
        }
    }

    addCoin = () => {
        this.totalCoins ++;
    }

    print = () => {
        console.log(`Name: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}`)
        if (this.hasStar) {
            console.log("You have a Star!")
        }
        console.log("\n")
    }
} 

getRandom = () => Math.round((Math.random() * 2))
let intervalID;
stopInterval = (intervalID) => clearInterval(intervalID);


playRound = () => {
        switch (getRandom()) {
            case 0: 
                player.gotHit();
                break;
            case 1: 
                player.gotPowerup();
                break;
            case 2: 
                player.addCoin();
                break;
            default:
                console.log(`Warnings - Invalid case ${randomIndex}`);
                player.status = "Dead";
        }
        if (player.status === "Dead") {
            stopInterval(intervalID);
        } else {
            player.print();
        }
    }


const player = new Player("Mario");

intervalID = setInterval(playRound, 10);







