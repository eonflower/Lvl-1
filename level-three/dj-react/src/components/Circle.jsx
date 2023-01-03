import React, {useState} from "react";

export default function Circle(props) {
    
    
    return (
        <div className="circles">
            <div className="circle-container">
            {props.bgShadow.map((colour, index) => {
                let i = 0
                i++
                // console.log(index)
                return (
                    <div className={`circle${index} ${colour}`} style={{boxShadow: `0 0 30px ${colour}`}}></div>
                ) 
            }
            
        )
    }
        </div>
        <div className='button-container'>
            <button className="button smallTime" onClick={props.handleClick1}>button 1</button>
            <button className="button party" onClick={props.handleClick2}>button 2</button>
            <button className="button bottomLeft" onClick={props.handleClickLeft}>button 3</button>
            <button className="button bottomRight" onClick={props.handleClickRight}>button 4</button>
            <button className="button bigTime1" onClick={props.handleClick5}>button 5</button>
            <button className="button bigTime2" onClick={props.handleClick6}>button 6</button>
            <button className="button bigTime3" onClick={props.handleClick7}>button 7</button>
            <button className="button bigTime4" onClick={props.handleClick8}>button 8</button>
        </div>
        </div>
    )
}