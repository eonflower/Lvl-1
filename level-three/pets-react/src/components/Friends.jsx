import React from "react";
import Pet from "./Pet";

export default function Friends(props) {
    // console.log(props.pets)


    const animal = props.pets.map((pet) =>  {
        return <Pet {...pet} />
    })


    return (
        <div className="friend-card">
            <span className="friend-info">
            <h2 className="friend-name">{props.name}</h2>
            <h4 className="friend-age">Age: {props.age}</h4>
            </span>
            {/* <hr className="page-break"/> */}
             
             <div className="pet-container">
                <h2 className="pet-title">Pets</h2>
                {animal}
            </div>
        </div>
    )
}




       