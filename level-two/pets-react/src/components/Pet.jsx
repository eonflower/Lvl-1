import React from "react";
import "../data"

export default function Pet(props) {


    let capitalized = JSON.stringify(props, (pet, word) => {
        
        
        if (typeof word === "string") {
            return word.toString().charAt(0).toUpperCase() + word.slice(1)
        }
        return word;
    })

    let capObj = JSON.parse(capitalized)
    
    return (
        <span className="pet-info">
                <h3 className="pet-name">{capObj.name}</h3>
                <p className="pet-breed">{capObj.breed}</p>
        </span>
    )



}


//     const arrayLength = (array) => {
//         if (array.length < 2) {
//             return array[0].toUppercase() + array.slice(1)
//         }
        
//         //  check length of array
//         // if it's one, capitalize and return
//         // 
//         //  if it's more than one
//         // create blank string
//         // loop through array 
//     }