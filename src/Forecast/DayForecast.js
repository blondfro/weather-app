import React, {useContext, useState} from 'react';
import ForecastCard from "./ForecastCard";

import "./dayForecast.css"
import {WeatherContext} from "../App";

function DayForecast({ checkCondition}) {
    const { location, currForecast,} = useContext(WeatherContext);
    let main = currForecast.weather[0].main;
    const condition = checkCondition(main);


    return (
        <div className="card current-day-section">
            <h3 id="city-name" className="card-header">
                {location.name}, {location.state} - Today's Forecast
            </h3>
            <ForecastCard isDaily={false} forecast={currForecast} condition={condition} />
        </div>
    )
}

export default DayForecast;