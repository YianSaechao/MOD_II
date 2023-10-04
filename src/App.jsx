import { useState } from 'react'
import './App.css'
import HeaderButtons from './components/HeaderButton' 
import Inputs from './components/Inputs'
import DateTime from './components/DateTime'
import Temperature from './components/Temperature'



function App() {
  
  return (

    <div className="App">
      <HeaderButtons/>
      <Inputs/>
      <DateTime/>
      <Temperature/>

    </div>
  )
}

export default App
