import React, {useState} from 'react';

import DayForecast from "./DayForecast";
import DailyForecast from "./DailyForecast";
import { mockLocation, mockForecast } from "../mockData/mockDB";
import {logDOM} from "@testing-library/react";

function ForecastDisplay() {
    const [location, setLocation] = useState(mockLocation);
    const [forecast, setForecast] = useState(mockForecast);

    return (
        <div>
            <DayForecast location={location} forecast={forecast.current}/>
            <DailyForecast forecast={forecast.daily}/>
        </div>
    )
}

export default ForecastDisplay;