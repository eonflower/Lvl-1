import {useState} from "react";
import Die from "./Die";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Dicebox() {
    
    const [numbers, setNumbers] = useState([1,1,1,1,1])
    const [state, setState] = useState(false)

    function changeNumber() {
        let newNum = numbers.map(number => Math.floor(Math.random() * 6) + 1)

        setNumbers(newNum)
        // console.log(icon)
    
    }

    function resetDice() {
        console.log(state)
        if (this.state = false) {
            setState(true)
        } 
    
    }




    
    return (
        <div className="container">
            <div className="dicebox">
            <Die
            classNum={1}
            dieNumber={numbers[0]}
            handleClick={changeNumber}
            resetClick={resetDice}
            
            />
            <Die
            classNum={2}
            dieNumber={numbers[1]}
            handleClick={changeNumber}
            resetClick={resetDice}
            
            />
            <Die
            classNum={3}
            dieNumber={numbers[2]}
            handleClick={changeNumber}
            resetClick={resetDice}
            
            />
            <Die
            classNum={4}
            dieNumber={numbers[3]}
            handleClick={changeNumber}
            resetClick={resetDice}
            
            />
            <Die
            classNum={5}
            dieNumber={numbers[4]}
            handleClick={changeNumber}
            resetClick={resetDice}
            
            />
            
        </div>
        <button className="roll" onClick={changeNumber}>roll the dice</button>
        <button className="reset" onClick={resetDice}>reset</button>
        </div>
    )
}