import React from 'react';
import ForecastCard from "./ForecastCard";

function DayForecast() {
    return (
        <div className="card">
            <h3 id="city-name" className="card-header">Austin</h3>
            <ForecastCard isDaily={false} />
        </div>
    )
}

export default DayForecast;