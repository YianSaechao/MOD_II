import React from 'react'

const HeaderButtons = () => {

    const cities = [
        {
            id: 1,
            title: "Seattle"
        },
        {
            id: 2,
            title: "London"
        },
        {
            id: 3,
            title: "Bangkok"
        },
        {
            id: 4,
            title: "Dubai"
        },
        {
            id: 5,
            title: "Sydney"
        }
    ]
  return (
    <div className="Header-Buttons">
        {cities.map((city) => (
            <button key={city.id}>{city.title}</button>
        ))}


    </div>
  
   
  )
}

export default HeaderButtons