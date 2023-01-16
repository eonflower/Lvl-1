const rl = require('readline-sync')


const caeserCipher = (text, key) => {
    if (key < 0) {
        return caeserCipher(text, key + 26);
    }
    
    let newString = "";

    for (let i = 0, j = text.length; i < j; i++) {
    let c = text[i]

    if (c.match(/[a-z]/i)) {
        let char = input.charCodeAt(i);

        if (char >= 97 && char <= 122) {
        c = String.fromCharCode(((char - 97 + shift) % 26) + 97);
      }
    }

    newString += c;

    }

    return newString;
    
};


let input = rl.question('What phrase would you like to encrypt? ').toLowerCase();
console.log("")

let shift = parseInt(rl.question("How many letters would you like to shift? "));
console.log("")

console.log(`Here is your new message: ${caeserCipher(input, shift)}`)

