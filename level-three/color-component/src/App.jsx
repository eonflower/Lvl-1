import React, {useState, useEffect} from "react"
import axios, {isCancel, AxiosError} from 'axios';
import './App.css'


function App() {
  const [bgColor, setBgColor] = useState("")
  const [colorData, setColorData] = useState([])

  

  useEffect(() => {
      async function getColors() {
          axios.get("https://www.colr.org/json/colors/random/100")
          .then(res => setColorData(res.data.colors))
      }
      getColors()
    }, [])

 
  const getColor = () => {
      const randomNumber = Math.floor(Math.random() * colorData.length)
      const colorHex = colorData[randomNumber]
      setBgColor(colorHex.hex)
      console.log(colorHex.hex)
  }

  // console.log(`#${bgColor}`)
  return (
    <div className="app" style={{backgroundColor: `#${bgColor}`}}>
    <button className="button" onClick={getColor}>Click me baby</button>
    </div>
  )
}

export default App
