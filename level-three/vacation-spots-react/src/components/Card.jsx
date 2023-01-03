import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Card(props) {
    let money
    if (props.price < 500) {
        money = "$"
    } else if (props.price < 1000) {
        money = "$$"
    } else {
        money ="$$$"
    }
    
    let seasonColour

    if (props.timeToGo === "Winter") {
        seasonColour = "radial-gradient(circle, rgba(174,247,244,0.5) 0%, rgba(0,95,255,0.5) 100%)"
    } else if (props.timeToGo === "Spring"){
        seasonColour = "radial-gradient(circle, rgba(244,247,174,0.2) 0%, rgba(255,232,0,0.5) 100%)"
    } else if (props.timeToGo === "Summer"){
        seasonColour = "radial-gradient(circle, rgba(247,239,174,0.5) 0%, rgba(255,92,0,0.5) 100%)"
    } else if (props.timeToGo === "Fall"){
        seasonColour = "radial-gradient(circle, rgba(181,252,1,0.4) 0%, rgba(16,101,31,0.4) 100%)"
    } else {
        seasonColour = "radial-gradient(circle, rgba(165,255,148,0.5) 0%, rgba(24,182,152,0.5) 100%)"
    }


    return (

        <div className="card" id="card">
            <img className="card-img" src={props.img} alt="" />
            <div className="card-text" id="card-text" style={{background: seasonColour}}>
                <span className="text-span"><h3 className="card-place"><FontAwesomeIcon className="location-icon" icon={faLocationDot} /> {props.place}</h3><p className="card-price">{money}</p></span>
                <p className="card-season">Best time to visit: {props.timeToGo}</p>
            </div>
            
        </div>
    )
}