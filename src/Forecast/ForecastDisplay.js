import React, {useEffect, useState} from 'react';

import DayForecast from "./DayForecast";
import DailyForecast from "./DailyForecast";

import "./forecastDisplay.css";

import {weatherConditions} from "./weatherConditions";
import { mockLocation, mockForecast } from "../mockData/mockDB";

function ForecastDisplay({ nextDate }) {
    const [location, setLocation] = useState(mockLocation);
    const [forecast, setForecast] = useState(mockForecast);



    const getForecast = async () => {
        await fetch("mockForecastDB.json")
            .then(res => res.json())
            .then(data => setForecast(data));
    }

    useEffect(() => {
        const getLocation = async () => {
            const fetched = await fetch("mockLocationDB.json")
                .then(res => res.json());

            setLocation(fetched);
        }

        getLocation();
        getForecast()
    }, [])

    const checkCondition = (condition) =>
         weatherConditions.filter(item => item.condition === condition)

    return (
        <div className="forecast-section">
            <DayForecast
                location={location}
                forecast={forecast.current}
                checkCondition={checkCondition}/>
            <DailyForecast
                forecast={forecast.daily}
                nextDate = {nextDate}
                checkCondition={checkCondition}/>
        </div>
    )
}

export default ForecastDisplay;