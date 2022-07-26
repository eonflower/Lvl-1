let i;
const arr = [];

for (i = 0; i <= 100; i++) {
    if (i%15 == 0) {
        console.log("Fizzbuzz")
        arr.push("Fizzbuzz");
    } else if (i%5 == 0) {
        console.log("Buzz")
        arr.push("Buzz")
    } else if (i%3 == 0){
        console.log("Fizz")
        arr.push("Fizz")
    } else {
        console.log(i)
        arr.push(i)
    }
}

const tally = {};

for (let x = 0; x < arr.length; x++) {
    const num = arr[x];
    tally[num] == undefined ? tally[num] = 1 : tally[num] += 1;
}

console.log("Fizzbuzz: " + tally["Fizzbuzz"], "Fizz: " + tally["Fizz"], "Buzz: " + tally["Buzz"]);