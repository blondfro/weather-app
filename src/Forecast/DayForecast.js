import React from 'react';
import ForecastCard from "./ForecastCard";

import "./dayForecast.css"

function DayForecast({location, forecast}) {

    return (
        <div className="card current-day-section">
            <h3 id="city-name" className="card-header">
                {location.name}, {location.state} - Today's Forecast
            </h3>
            <ForecastCard isDaily={false} forecast={forecast} />
        </div>
    )
}

export default DayForecast;