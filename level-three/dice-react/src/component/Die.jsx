import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from "@fortawesome/free-solid-svg-icons";

export default function Die(props) {
    const [isActive, setIsActive] = useState(true)

    function handleClick() {
        setIsActive(current => !current)
    }


     if (props.dieNumber === 1){
           return <FontAwesomeIcon className={isActive ? "icon-btn" : "icon-clicked"} onClick={handleClick} icon={faDiceOne} />
       } else if (props.dieNumber === 2){
           return <FontAwesomeIcon className={isActive ? "icon-btn" : "icon-clicked"} onClick={handleClick} icon={faDiceTwo} />
       } else if (props.dieNumber === 3){
           return <FontAwesomeIcon className={isActive ? "icon-btn" : "icon-clicked"} onClick={handleClick} icon={faDiceThree} />
       } else if (props.dieNumber === 4){
           return <FontAwesomeIcon className={isActive ? "icon-btn" : "icon-clicked"} onClick={handleClick} icon={faDiceFour} />
       } else if (props.dieNumber === 5){
           return <FontAwesomeIcon className={isActive ? "icon-btn" : "icon-clicked"} onClick={handleClick} icon={faDiceFive} />
       } else if (props.dieNumber === 6){
           return <FontAwesomeIcon className={isActive ? "icon-btn" : "icon-clicked"} onClick={handleClick} icon={faDiceSix} />
       }
    


    return (
        <div className="dice-container">
            <FontAwesomeIcon />
        </div>
    )
}