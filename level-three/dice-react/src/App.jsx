import React, { useState } from 'react'
import Dicebox from './component/Dicebox'
import './App.css'

// const randomRoll = () => Math.floor(Math.random() * 6) + 1

function App() {
  return (
    <div className="App">
    <div className="bg"></div>
     <Dicebox />
    </div>
  )
}

export default App
