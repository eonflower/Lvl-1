// let name = "John"
// const age = 101

// const runForLoop = (pets) => {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = (arr) => {
//     return arr.map((carrot) => {
//         return { type: "carrot", name: carrot }
//     })
// }

// console.log(mapVegetables(carrots))

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = (arr) => {
//     return arr.filter((person) => {
//         return person.friendly
//     })
// }

// console.log(filterForFriendly(people))//

// const doMathSum = (a, b) => {return a + b}

// const produceProduct = (a, b) => {return a * b}

// console.log(doMathSum(2, 5))

// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
//   return (`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)}

// console.log(printString("Kat", "Stark", 40))


// const animals = [
//    {
//        type: "dog",
//        name: "theodore"
//    },
//    {
//        type: "cat",
//        name: "whiskers"
//    },
//    {
//        type: "pig",
//        name: "piglette"
//    },
//    {
//        type: "dog",
//        name: "sparky"
//    }
// ];

// const filterForDogs = arr => {return arr.filter((animal) => {return animal.type === "dog"})}

// console.log(filterForDogs(animals))


const string = (location, name) => {
  return `Hi ${name}!\n Welcome to ${location}.\n I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`}

console.log(string("Hawaii", "Janice"))
  
  

