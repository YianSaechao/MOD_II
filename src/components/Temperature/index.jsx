import React from 'react'
import cloudyImage from '../images/cloudy.png'
import TemperatureImage from '../images/temperature.png'
import { UilTemperatureEmpty, UilWind, UilTear } from '@iconscout/react-unicons'


const Temperature = () => {
  return (
    <div>
        <div className="Temperature-Div1">
            <p>Cloudy</p>
        </div>
        <div className="Temperature-Div2">
            <img src={cloudyImage} alt="cloudy icon" className="Cloudy"/>
            <p>50{`\u00b0`}C</p>
            <div className="Temperature-Div3">
                <div className="Temperature-Div4">
                    <UilTemperatureEmpty />
                    Real Feel: 50{`\u00b0`}
                </div>
                <div className="Temperature-Div5">
                    <UilTear />
                    Humidity: 60%
                </div>
                <div className="Temperature-Div6">
                    <UilWind />
                    Wind Speed: 11 km/h
                </div>
            </div>
        </div>
    </div>
  )
}

export default Temperature