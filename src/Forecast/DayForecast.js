import React from 'react';
import ForecastCard from "./ForecastCard";

function DayForecast({location, forecast}) {

    return (
        <div className="card">
            <h3 id="city-name" className="card-header">
                {location.name}, {location.state}
            </h3>
            <ForecastCard isDaily={false} forecast={forecast} />
        </div>
    )
}

export default DayForecast;