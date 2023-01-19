import { useState } from 'react'
import './App.css'
import Badge from './Badge'
import Form from './Form'

function App() {
const [badgeList, setBadgeList] = useState([])

const addBadge = (newBadge) => {
  setBadgeList(prev => [...prev, newBadge])
}

const colors = [{
  leftColor: "purple", 
  rightColor: "blue"
}, {
  leftColor: "yellow",
  rightColor: "orange"
}, {
  leftColor: "orange",
  rightColor: "red"
}, {
  leftColor: "blue",
  rightColor: "green"
}, {
  leftColor: "yellow",
  rightColor: "purple"
}]

const badge = badgeList.map((badge, index) => {
  return <Badge
      firstName={badge.firstName}
      lastName={badge.lastName}
      pronouns={badge.pronouns}
      jobTitle={badge.jobTitle}
      email={badge.email}
      phoneNumber={badge.phoneNumber}
      bio={badge.bio}
      leftColor={colors[index % colors.length].leftColor}
      rightColor={colors[index % colors.length].rightColor}
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
