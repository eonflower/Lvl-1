const rl = require("readline-sync");
i = 0;

console.log("")
console.log("Death Is A Surprise Party. Unless Of Course, You're Already Dead On The Inside.")
console.log("")

// Welcome message
const name = rl.question("Welcome to the Escape Room, what is your name? ");
console.log(`Ah yes, good to meet you ${name}`)
console.log("")

// Wanna play a game?
const play = rl.question("Do you wanna play a game? ")
    if (play == "yes") {
        console.log("Perfect...... let's get started")
    } else if (play == "no") {
        console.log(`Aww, poor little ${name} doesn't wanna play the game... Well that sucks.`)
    } else {
        console.log("You know, you really shouldn't mumble so much")
    }
console.log("")

// Description of the room
console.log("* you notice that you are all alone in a dark room *")
console.log("")
console.log("There's an old and weathered door to the left.")
console.log("To the right of the door is a small nightstand that has an envelope and a book on it.")
console.log("")
console.log("Behind you to your left is a dresser missing its knobs. It's unclear if you'll be able to open it.")
console.log("Next to the dresser appears to be a small hole in the wall.")
console.log("")
console.log("Behind you to your right is an empty corner with a large stain on the floor.")
console.log("")

// Initial viewing
const items = ['Door', 'Nightstand', 'Dresser', 'Hole', 'Stain'];

const itemSelect = rl.keyInSelect(items, 'What would you like to look at?');
    if (itemSelect == 0) {
        console.log("You go to open the door and see that it's locked.")
    } else if (itemSelect == 1) {
        console.log("You notice that the envelope on the nightstand is ripped open, and that the book is called 'Disco Bloodbath'.")
    } else if (itemSelect == 2) {
        console.log("The dresser looks old. The top drawer has a crack big enough to stick a finger in.")
    } else if (itemSelect == 3) {
        console.log("You look through the hole and see nothing.")
    } else if (itemSelect == 4) {
        console.log("You get closer to the stain and see that it is very wet and slightly.. concerning.")
    }
console.log("")

// First interaction
const moreItems = ['Door', 'Envelope', 'Book', 'Hole', 'Drawer Crack']

const itemSelect2 = rl.keyInSelect(moreItems, 'What would you like to interact with?');
    if (itemSelect2 == 0) {
        console.log("It's locked ya dingus, find the key.")
        i += 3;
    } else if (itemSelect2 == 1) {
        console.log("You pull a note out of the envelope that says 'the key is in the hole.'")
        i += 3;
    } else if (itemSelect2 == 2) {
        console.log("You open the book and find a key inside.")
        i += 4;
    } else if (itemSelect2 == 3) {
        console.log("You stick your hand in the hole. Suddenly your eyes go blurry and your limbs feel heavy. You fall to the ground.")
        i += 2;
    } else if (itemSelect2 == 4) {
        console.log("You stick your finger in the crack to try and open the drawer. It doesn't budge.")
        i += 3;
}

// Looped interaction
function gameLoop() {
    const itemSelectLoop = rl.keyInSelect(moreItems, 'What would you like to interact with next?');
    if (itemSelectLoop == 0) {
        console.log("It's locked ya dingus, find the key.")
        i += 0;
    } else if (itemSelectLoop == 1) {
        console.log("You pull a note out of the envelope that says 'the key is in the hole.'")
        i += 0;
    } else if (itemSelectLoop == 2) {
        console.log("You open the book and find a key inside.")
        i += 1;
    } else if (itemSelectLoop == 3) {
        console.log("You stick your hand in the hole. Suddenly your eyes go blurry and your limbs feel heavy. You fall to the ground.")
        console.log('')
        console.log("You have died.")
        i -= 1;
    } else if (itemSelectLoop == 4) {
        console.log("You stick your finger in the crack to try and open the drawer. It doesn't budge.")
        i += 0;
}
}


if(i == 2) {
    console.log("You have died.")
    process.exit();
}

while(i == 3) {
    gameLoop();
}


while(i == 4) {
    const unlock = rl.keyInYN("Do you want to try and unlock the door")
    if (unlock) {
        i -= 3;
    }
    else if (!unlock) {
      gameLoop();
    }
}

while(i == 1) {
    console.log("congratulations, you live to see another day.")
    break;
}

