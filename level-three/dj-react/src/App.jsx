import React, { useState } from 'react'
import useSound from 'use-sound'
import c7 from "./sounds/c7.mp3"
import clap from "./sounds/clap.wav"
import distortedKick from "./sounds/distortedKick.mp3"
import g5 from "./sounds/g5.mp3"
import getLaid from "./sounds/getLaid.wav"
import lowKick from "./sounds/lowKick.wav"
import snare from "./sounds/snare.wav"
import techno from "./sounds/techno.wav"
import './App.css'
import Circle from './components/Circle'

function App() {

  const [colour, setColour] = useState(["white", "white", "white", "white", "white", "white", "white", "white"])
  
  function handleClick1() {
    // const [play] = useSound(c7)
    
    if (colour.includes("white")) {
      setColour(colour.map(circles => "black"))
    } else if (!colour.includes("white")) {
      setColour(colour.map(circles => "white"))
    }
  }

  function handleClick2() {
    // console.log(colour)
    // const [play] = useSound(clap)
    let colourArray = colour.splice(4, 4)
    setColour(["#6e3585", "#6e3585", "#6e3585", "#6e3585", ...colourArray])

  }

  function handleClickLeft() {
    // const [play] = useSound(distortedKick)
    let colourArray = [...colour]
    colourArray[4] = "#0c83e4"
    colourArray[5] = "#0c83e4"
    setColour(colourArray)
  }

  function handleClickRight() {
    // const [play] = useSound(g5)
    let colourArray = [...colour]
    colourArray[6] = "#0c83e4"
    colourArray[7] = "#0c83e4"
    setColour(colourArray)
  }

  function handleClick5() {
    // const [play] = useSound(getLaid)
    let colourArray = [...colour]
    colourArray[0] = "#ffc800"
    colourArray[1] = "#9e0179"
    colourArray[2] = "#9e0179"
    colourArray[3] = "#ffc800"
    colourArray[4] = "#ffc800"
    colourArray[5] = "#9e0179"
    colourArray[6] = "#9e0179"
    colourArray[7] = "#ffc800"
    setColour(colourArray)
  }

  function handleClick6() {
    // const [play] = useSound(lowKick)
    let colourArray = [...colour]
    colourArray[1] = "#b3c1f9"
    setColour(colourArray)
  }

  function handleClick7() {
    // const [play] = useSound(snare)
    let colourArray = [...colour]
    colourArray[6] = "#B22222"
    setColour(colourArray)
  }

  function handleClick8() {
    // const [play] = useSound(techno)
    let colourArray = [...colour]
    colourArray[3] = "#009999"
    setColour(colourArray)
  }

  

  // console.log(colour)
  return (
    <div>
      <h1 className='header'>DJ REACT</h1>
    <div className="app">
      <Circle
        bgShadow={colour}
        handleClick1={handleClick1}
        handleClick2={handleClick2}
        handleClickLeft={handleClickLeft}
        handleClickRight={handleClickRight}
        handleClick5={handleClick5}
        handleClick6={handleClick6}
        handleClick7={handleClick7}
        handleClick8={handleClick8}
       />
      </div>
    </div>
  ) 
}

export default App

