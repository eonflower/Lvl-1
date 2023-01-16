import React from 'react'
import './App.css'
import FriendList from './components/FriendList'
import Header from "./components/Header"
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  return (
    <div className="app">
    <Header />
    <Main />
    <hr className="page-break" />
    <h1 className="friend-header">Pet-tential Lovers</h1>
    <FriendList />
    <Footer />
    </div>
  )
}

export default App
