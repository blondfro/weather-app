import React, {useState} from 'react';

import DayForecast from "./DayForecast";
import DailyForecast from "./DailyForecast";

import "./forecastDisplay.css";



import { mockLocation, mockForecast } from "../mockData/mockDB";

function ForecastDisplay({ nextDate }) {
    const [location, setLocation] = useState(mockLocation);
    const [forecast, setForecast] = useState(mockForecast);

    return (
        <div className="forecast-section">
            <DayForecast location={location} forecast={forecast.current}/>
            <DailyForecast forecast={forecast.daily} nextDate = {nextDate}/>
        </div>
    )
}

export default ForecastDisplay;