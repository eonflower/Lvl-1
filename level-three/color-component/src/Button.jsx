import React, {useState, useEffect} from "react"
import axios, {isCancel, AxiosError} from 'axios';

export default function Button() {
    const [bgColor, setBgColor] = useState({backgroundColor: ""})
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
        setBgColor({backgroundColor: colorHex.hex})
        console.log(colorHex.hex)
    }

    return (
        <div>
            <button className="button" onClick={getColor}>Click me baby</button>
        </div>
    )
}
