import React, {useState} from 'react';
import ForecastCard from "./ForecastCard";

import "./dayForecast.css"

function DayForecast({location, forecast, checkCondition}) {
    const condition = checkCondition(forecast.weather[0].main)

    return (
        <div className="card current-day-section">
            <h3 id="city-name" className="card-header">
                {location.name}, {location.state} - Today's Forecast
            </h3>
            <ForecastCard isDaily={false} forecast={forecast} condition={condition} />
        </div>
    )
}

export default DayForecast;