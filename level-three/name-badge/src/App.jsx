import { useState } from 'react'
import './App.css'
import Badge from './Badge'
import Form from './Form'

function App() {
const [badgeList, setBadgeList] = useState([])

const addBadge = (newBadge) => {
  setBadgeList(prev => [...prev, newBadge])
}

const badge = badgeList.map((badge, index) => {
  return <Badge
      firstName={badge.firstName}
      lastName={badge.lastName}
      pronouns={badge.pronouns}
      jobTitle={badge.jobTitle}
      email={badge.email}
      phoneNumber={badge.phoneNumber}
      bio={badge.bio}
      leftColor={badge.leftColor}
      rightColor={badge.rightColor}
      // leftColor={badge.leftColor === "purple" ? "yellow" : "purple"}
      // rightColor={badge.rightColor === "blue" ? "orange" : "blue"}
      />
})

  return (
    <div className="app">
      <h1 className='app-title'>Badge Creator</h1>
      <Form submit={addBadge} />
      <div className='badge-list'>
      {badge}
      </div>
    </div>
  )
}

export default App
