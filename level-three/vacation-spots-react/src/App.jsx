import React from 'react'
import './App.css'
import Card from './components/Card'
import vacationSpots from './components/data'
import Header from './components/Header'

function App() {
  const TravelCard = vacationSpots.map(spot => {
    return <Card {...spot} />
  })
  return (
    <div className="App">
      <Header />
      <div className='card-container'>
      {TravelCard}
      </div>
    </div>
  )
}

export default App
