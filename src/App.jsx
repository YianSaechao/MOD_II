import { useState } from 'react'
import './App.css'
import HeaderButtons from './components/HeaderButton' 
import Inputs from './components/Inputs'
import DateTime from './components/DateTime'
import Temperature from './components/Temperature'
import Forecast from './components/Forecast'



function App() {
  
  return (

    <div className="App">
      <HeaderButtons/>
      <Inputs/>
      <DateTime/>
      <Temperature/>
      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
      <Forecast title="Weekly Forecast" />
    </div>
  )
}

export default App
