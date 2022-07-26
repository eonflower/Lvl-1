const rl = require('readline-sync');

let inventory = [];
let userHealth = 50;
let enemyHealth = 50;
let userPower;
let enemyPower;


let enemies = ["small masked bandit", "gigantic toad person", "creepy old man", "flying squirrel wearing an eyepatch", "innocent little orphan"]
let ordinaryLoot = ["Small Glass Bottle", "Framed Picture of Dragon Wearing a Monocole", "Small Bottle of Vodka", "Tin of Mints", "Pair of Boots", "Nail CLippers", "Rusty Spoon", "Hat with Gold Feather"];
let coolLoot = ["Dagger", "Wand of Some Sort", "Small Crossbow", "Serrated Boomerang"];
let enemyLoot =["a butterfly knife", "a note that reads: I love you ~ Dad", "1 unlabeled potion", "a locket with a picture of a slug inside", "a chocolate bar", "5 gold coins"]
const things = ["Look for plants", "Search for loot", "Seek out an enemy"];
const things2 = ["Print stats", "Go for another walk"]



// Random enemy function
const randomBadGuy = () =>{
    badGuy = enemies[Math.floor(Math.random() * enemies.length)];
}

// Walking choices & chance
function walking() {
    const choice = rl.keyInSelect(things, "What would you like to do?")

    // plants chance
    if (choice == 0) {
        let plants = Math.random(); 
        if (plants <= .50) {
          inventory.push("Nettles ")
            console.log("You found some Nettles. It has been added to your inventory.")
            console.log("")
            gamePlay();
        } else if (plants <= .85) {
        inventory.push("Ginger ")
        console.log("You came across some Ginger. It has been added to your inventory.")
        console.log("")
        gamePlay();
        } else { 
        inventory.push("Ashwagandha ")
        console.log("Wow, you found some rare Ashwagandha. It has been added to your inventory.")
        console.log("")
        gamePlay();
        };
    }

    // loot chance
    else if (choice == 1) {
        let ordinaryPickup = ordinaryLoot[Math.floor(Math.random() * ordinaryLoot.length)];
        let coolPickup = coolLoot[Math.floor(Math.random() * coolLoot.length)];
        let loot = Math.random(); 
        if (loot <= .50) {
            inventory.push(ordinaryPickup + "");
            console.log("You go searching for loot and find a " + ordinaryPickup + ". It has been added to your inventory.")
            gamePlay();
        } else if (loot <= .85) {
        inventory.push(coolPickup + "")
        console.log("Sweet! You found a " + coolPickup + ". It has been added to your inventory.")
        gamePlay();
        } else if (loot <= .95) {
        inventory.push("Dragon's Fang ")
        console.log("You seem to come across a Dragon's Fang that matches the scar on your arm.")
        gamePlay();
        } else { 
        console.log("You find what appears to be a small iron cage with a human skull inside. There is a dead rose between the teeth of the skull. It is too heavy to take with you.")
        gamePlay();
        };
    }

    // enemy chance
    else if (choice == 2) {
        let enemy = Math.random(); 
        if (enemy <= .33) {
            console.log("")
            console.log("a " + badGuy + ' has appeared')  
            wildEnemy(); 
        } else if (enemy <= .58) {
        console.log("")
        console.log("a " + badGuy + ' has appeared')
        wildEnemy();
        } else { 
        console.log("You are greeted by a small black cat, but no enemies are to be found.")
        gamePlay();
        };
    };
  };

function gamePlay() {
    randomBadGuy()
    let chance = Math.random(); 
    if (chance <= .33) {
        console.log("")
        console.log("a " + badGuy + ' has appeared')
        wildEnemy(); 
    } else if (chance <= .58) {
    console.log("")
    console.log("a " + badGuy + ' has appeared')
    wildEnemy();
    } else { 
    walking();
    };
};


// Enemy killed function
const nextSteps = () => {
    const choice2 = rl.keyInSelect(things2, "What would you like to do next?")
    if (choice2 == 0) {
        console.log(name + "'s health: " + userHealth + "\nInventory: " + inventory)
        nextSteps();
      }  else if (choice2 == 1) {
        console.log("You have chosen to go for another walk")
        console.log("")
        gamePlay();
      };
};


// Attack power function
const power = () => {
    userPower = Math.floor(Math.random() * 15 + 1);
    enemyPower = Math.floor(Math.random() * 8 + 1);
    const moreDamage = coolLoot.every(value => {
        return inventory.includes(value);
    });
    while (moreDamage === true) {
        userPower = Math.floor(Math.random() * 25 + 1);
    }
};

// New enemy health
const regenerate = () => {
    enemyHealth = 50;
}
// Added health for winning
const newHealth = () => {
    userHealth += 20;
}



// Wild enemy function
const wildEnemy = () => {
    let lootPickup = enemyLoot[Math.floor(Math.random() * enemyLoot.length)];
    regenerate();
    while (enemyHealth > 0 && userHealth > 0) {
const action = rl.question(`What would you like to do? Enter "r" to run. Enter "a" to attack. `)
        switch (action) {
            case 'r':
                const run = Math.random();
                if (run <= .5) {
                    power();
                    console.log("You try to run away, but the " + badGuy + " attacks you with: " + enemyPower + "\nYou have " + userHealth + " life left \nEnemy has " + enemyHealth + " left");
                } else {
                    console.log("You ran away successfully!!")
                    console.log("")
                    gamePlay();
                }
            case 'a':
                power();
                enemyHealth -= userPower;
                console.log("")
                console.log('You attacked ' + badGuy + ' with ' + userPower + ' attack power.' + "\nEnemy has " + enemyHealth + " life left");
                console.log("");
                
                if (enemyHealth <= 0) {
                    console.log('Blood splatters on your face as ' + badGuy + " falls to the ground. \nYou have successfully killed the enemy.")
                    console.log("You loot " + lootPickup + " from the body of the enemy.")
                    inventory.push(lootPickup);
                    newHealth();
                    nextSteps();
                } else if (userHealth <= 0) {
                    userHealth = 0;
                    console.log('The ' + badGuy + " has killed you, better luck next time.")
                    return;
                };

                userHealth -= enemyPower;
                console.log("")
                console.log('Enemy has attacked you with ' + enemyPower + ' attack power.' + "\nYou have " + userHealth + " life left");
                console.log("");
                
                if (enemyHealth <= 0) {
                    console.log('Blood splatters on your face as ' + badGuy + " falls to the ground. \nYou have successfully killed the enemy.")
                    console.log("You loot " + lootPickup + " from the body of the enemy.")
                    inventory.push(lootPickup + "");
                    newHealth();
                    nextSteps();
                } else if (userHealth <= 0) {
                    userHealth = 0;
                    console.log('The ' + badGuy + " has killed you, better luck next time.")
                    process.exit();
                };
        };
    };
};

// Welcome message and scene set
console.log("");
console.log("In a land where potions are lacking, you find yourself on the hunt for herbs and plants to create your own potions. \nThe world split after the plague had been released, so trust doesn't come easy these days. \nMost towns have been looted but there's always a chance that things have been missed. \nJust be a bit... wary and good luck on your hunt.");;
console.log("");

// Who are you?
const name = rl.question("Welcome, Traveler, what's your name? ");
console.log(`${name}, is it? I'll have to remember that.`);
console.log("");

// First Action
const walk = rl.question("It's time to walk now. Please press 'w' to start. ")
if (walk == "w") {
    gamePlay();
    } else {
    console.log("it's not good to stay in one spot")
    console.log("")
    gamePlay();
};
