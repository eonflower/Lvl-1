const rl = require('readline-sync')


const userName = rl.question("What's your name? ");
console.log('Welcome to the Matrix, ' + userName + '...');

const pill = rl.question("Which pill will you choose, red or blue? "); 
    if (pill === "red") {
    console.log('Ah, yes. You have chosen red')
    } else if (pill === "blue") {
        console.log('Bold choice to be choosing blue')
    } else {
        console.log("Maybe drugs aren't the answer anyways.")
    };


rl.question("Are you sure about your decision? ");
console.log("Okay, well you don't get to change your mind ");

rl.question("Moving on... ready to do some math? ");
console.log('Here we go!');
console.log("");
console.log("We are going to do some addition now.")
console.log("");

const add1 = parseInt(rl.question('Please enter your first number '));
const add2 = parseInt(rl.question('Please enter the second number '));

const addSum = add1 + add2;

console.log('The sum of your two numbers is ' + addSum);
console.log("");

const mult1 = parseInt(rl.question('Okay, great job. Now we will multiply two numbers. Please enter your first number '));
const mult2 = parseInt(rl.question('Please enter the second number '));

const multSum = mult1 * mult2;

console.log("The sum of your two numbers is ", + multSum);
console.log("");

const div1 = parseInt(rl.question('Superb! Next up is division. Please enter your first number '));
const div2 = parseInt(rl.question('Please enter the second number '));

const divSum = div1 / div2;

console.log("The sum of your two numbers is ", + divSum);
console.log("");

const sub1 = parseInt(rl.question("You're doing great! Now to subtract. Please enter your first number "));
const sub2 = parseInt(rl.question('Please enter the second number '));

const subSum = sub1 - sub2;

console.log("The sum of your two numbers is ", + subSum);
console.log("");

console.log("Okay next problem.");
console.log("");

const a = parseInt(rl.question('Please enter your first number '));
const b = parseInt(rl.question('Please enter the second number '));

// const addSum = a + b;
// const subSum = a - b;
// const multSum = a * b;
// const divSum = a / b;

// const choice = rl.question("What would you like to do with these numbers? Please pick one: add, subtract, multiply, or divide. ");
//     if(choice.toLowerCase == 'add') {
//     console.log(a + " + " + b + " = " + addSum);

//     } else if(choice.toLowerCase == 'subtract') {
//     console.log(a + " - " + b + " = " + subSum);

//     } else if(choice.toLowerCase == 'multiply') {
//     console.log(a + " * " + b + " = " + multSum);

//     } else if(choice.toLowerCase == 'divide') {
//     console.log(a + " / " + b + " = " + divSum);
    
//     } else {
//     console.log('I think you might have made a typo');
    
//     };

// console.log("")

// if (rl.keyInYN("Lovely! Shall we do another?")) {
//     console.log("Another one it is!");

// } else {
//     console.log('Okay, all done.');
// }
    
    





