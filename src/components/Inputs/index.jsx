import React from 'react'
import searchImage from '../images/search.png';
import locationImage from '../images/location.png'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = () => {
  return (
    <div className="Inputs">
        <div className="Inputs-Div1">
            <input type="text" className="Input-Field" placeholder='search...' style={{ textTransform: "capitalize"}} />
            <UilSearch />
            <UilLocationPoint />
        </div>
        <div className="Inputs-Div2">
            <button name="metric">{'\u2103'}</button>
            <p>|</p>
            <button name="imperial">{'\u2109'}</button>
        </div>
    </div>
  )
}

export default Inputs