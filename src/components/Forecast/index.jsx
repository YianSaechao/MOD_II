import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
        <div className="Forecast-Div1">
            <p>{title}</p>
        </div>
        <hr />
        <div className="Forecast-Div2">
            <div className="Forecast-Div3">
              <p>4:30 PM</p>
              <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="clear sky" />
              <p>80{`\u00b0`}</p>
            </div>
            <div className="Forecast-Div3">
              <p>4:30 PM</p>
              <img src="https://openweathermap.org/img/wn/11d@2x.png" alt="clear sky" />
              <p>80{`\u00b0`}</p>
            </div>
            <div className="Forecast-Div3">
              <p>4:30 PM</p>
              <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="clear sky" />
              <p>80{`\u00b0`}</p>
            </div>
            <div className="Forecast-Div3">
              <p>4:30 PM</p>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="clear sky" />
              <p>80{`\u00b0`}</p>
            </div>
            <div className="Forecast-Div3">
              <p>4:30 PM</p>
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="clear sky" />
              <p>80{`\u00b0`}</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast