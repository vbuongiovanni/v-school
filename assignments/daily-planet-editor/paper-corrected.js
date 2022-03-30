    /*
    This code contains only syntax and code style problems. The logic of the code works,
    so DO NOT change the functionality of anything in here.

    In short, you shouldn't need to add your own statements anywhere,
    just fix the existing ones.
    */


    // Written by Kent, Clark


// *** VB - potential preferential changes made throughout file:
//  1) moved opening and closing curly brackets
//  2) added spaces between operators
//  3) added indention for readability


// *** VB - changed 'var' to 'const'
// *** VB - changed 'Enemies' to 'enemies'
    const enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

// *** VB - corrected 'funtion' to 'function'
// *** VB - Corrected name of function form Snake_Case to camelCase
// *** VB - Corrected parameter names from html-naming-convention to camelCase


    function whoWins(isThereKryptonite,enemyName) {
        
        if (!isThereKryptonite) {
            return "Superman beats " + enemyName + ", of course";
        } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";
        }

    }


// *** VB - Changed 'var' to 'let'
// *** VB - moved isThereKryptonite declaration outside loop
// *** VB - removed if-else statement in favor of more concise version

    let isThereKryptonite;

    for(let i = 0; i < enemies.length; i++){

        is_there_kryptonite = (i % 2) ? true : false;

        console.log(whoWins(is_there_kryptonite, enemies[i]));
    }


// *** VB - changed 'Mat.random' to 'Math.random'

    function HowAttractedIsLoisLaneToMe () {
        // 1 is not at all attracted, 10 is "super" attracted...
        return Math.floor((Math.random()*10)+1);
    }

// *** VB - changed 'consol' to 'console'

    console.log( HowAttractedIsLoisLaneToMe());

// *** VB - added '=' between false and 'superman' 
// *** VB - changed 'var' to 'let'

    let clarkKent = true;
    let superman = false;

// *** VB - changed 'var' to 'let' and moved phoneBoothQuickChange declaration outside the while-loop

    let phoneBoothQuickChange;

    while (clarkKent){

        console.log("I'm just a nerdy columnist");

        phoneBoothQuickChange = Math.random();

        if (phoneBoothQuickChange>= 0.5) {
            clarkKent=false;
            superman=true;
            console.log("Now I'm Superman!");
        }
    }

