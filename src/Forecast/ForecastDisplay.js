import React, {useContext, useEffect, useState} from 'react';

import DayForecast from "./DayForecast";
import DailyForecast from "./DailyForecast";

import "./forecastDisplay.css";

import {weatherConditions} from "./weatherConditions";
import {WeatherContext} from "../App";

function ForecastDisplay() {


    const checkCondition = (condition) =>
         weatherConditions.filter(item => item.condition === condition)

    return (
        <div className="forecast-section">
            <DayForecast
                checkCondition={checkCondition}/>
            <DailyForecast
                checkCondition={checkCondition}/>
        </div>
    )
}

export default ForecastDisplay;