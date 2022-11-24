const collectAnimals = (...animals) => {return animals}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const combineFruit = (fruit, sweets, vegetables) => {return {fruit, sweets, vegetables}}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
//=> {
     //    fruit: ["apple", "pear"],
     //    sweets: ["cake", "pie"],
     //    vegetables: ["carrot"]
     // }

const parseSentence = ({location, duration}) => {
  return `We're going to have a good time in ${location} for ${duration}`
}



console.log(parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
}))


const returnFirst = (items) =>{
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem;
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = (arr) => {
    let [firstFav, secondFav, thirdFav] = favoriteActivities;/*your code here*/
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))

const combineAnimals = (...animalTypes) => {
  let [firstType, secondType, thirdType] = animalTypes
  return [...firstType, ...secondType, ...thirdType];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

const product = (a, b, c, d, e) => {
  let numbers = [a,b,c,d,e];
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}

console.log(product(1,2,1,4,2))

const unshift = (...things) => {
  firstThing = things.shift();
  return ([...things, ...firstThing]);
}

const populatePeople = (names) => {return names.map((name) => {
    let [firstName, lastName] = name.split(" ");
          return `firstName: ${firstName}, lastName: ${lastName}`;
      })
  }
  
  console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
  //[
   {firstName: "Frank", lastName: "Peterson"},
   {firstName: "Suzy", lastName: "Degual"},
   {firstName: "Liza", lastName: "Jones"},
  ]
  