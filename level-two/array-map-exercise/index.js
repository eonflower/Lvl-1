// const doubleNumbers = (arr) => {
//   let newArr = arr.map(function(num){
//     return num * 2
//   })
  
//   return newArr
// }
// console.log(doubleNumbers([3, 5, 100]))
// console.log(doubleNumbers([10, 6, 8, 5, 100]))


// const stringItUp = (arr) => {
//   return arr.map(function(num) {
//     return String(num);
//   })
// };

// console.log(stringItUp([2, 5, 100]));

// const capitalizeNames = (arr) => {
//     return arr.map(function(name) {
//       let lower = name.toLowerCase()
//       let capitalized = lower.charAt(0).toUpperCase() + lower.slice(1)
//       return capitalized;
//     })
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// const namesOnly = (arr) =>{
//   return arr.map(function({name, age}) {
//     return name;
//   })
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));


// const makeStrings = (arr) => {
//   return arr.map(function({name, age}) {
//     if (age >= 18){
//       return name + " can go to The Matrix"
//     } else {
//       return name + " is underage!"
//     }
//   })
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

const readyToPutInTheDOM = (arr) => {
    return arr.map(function({name, age}) {
      return "<h1>" + name + "</h1><h2>" + age + "</h2>"
    })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));