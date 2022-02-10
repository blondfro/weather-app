import React from 'react';

import DayForecast from "./DayForecast";
import DailyForecast from "./DailyForecast";

function ForecastDisplay() {

    return (
        <div>
            <DayForecast />
            <DailyForecast />
        </div>
    )
}

export default ForecastDisplay;