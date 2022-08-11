var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

const sortedFunc = (arr) => {
  return arr.sort(function(a, b) {
         if (a.lastName < b.lastName) {
           return -1;
         } if (a.lastName > b.lastName) {
           return 1;
         }
      }) .filter(function({firstName, lastName, age}) {
    if(age > 18) {
      return firstName
    }
  }) .map(function({firstName, lastName, age}) {
    if(age > 18) {
      return "<li>" + firstName + " " + lastName + " is " + age + "</li>"
    }
  })
}


console.log(sortedFunc(peopleArray))