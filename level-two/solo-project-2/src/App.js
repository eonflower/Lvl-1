
import React from "react";
import "inter-ui/inter.css";
import './App.css';
import data from "./components/data.js";
import Header from './components/Header.js';
import TravelCard from "./components/TravelCard.js";


function App() {

  const Cards = data.map((item) => {
    // console.log(item)
    return <><TravelCard 
              key={item.id}
              {...item}
              />
          <hr className="hr"/>
          </>
  })
  return (
    <div>
      <Header />
      <div className="card--list">
        {Cards}
      </div>
      
    </div>
  );
}

export default App;


