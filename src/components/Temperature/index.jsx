import React from 'react'
import cloudyImage from '../images/cloudy.png'
import TemperatureImage from '../images/temperature.png'
import { UilTemperatureEmpty, UilWind, UilTear, UilSun, UilSunset, UilTemperaturePlus, UilTemperatureMinus   } from '@iconscout/react-unicons'


const Temperature = () => {
  return (
    <div>
        <div className="Temperature-Div1">
            <p>Cloudy</p>
        </div>
        <div className="Temperature-Div2">
            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="few clouds" />
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
        <div className="Temperature-Div7">
              <UilSun />  
              <p>SunRise: 6:45 AM</p>
              <p>|</p>
              <UilSunset />  
              <p>SunSet: 6:45 PM</p>
              <p>|</p>
              <UilTemperaturePlus />  
              <p>High: 72{`\u00b0`}</p>
              <p>|</p>
              <UilTemperatureMinus />  
              <p>Low: 55{`\u00b0`}</p>
              <p>|</p>
        </div>
    </div>
  )
}

export default Temperature