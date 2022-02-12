import React from 'react';
import ForecastCard from "./ForecastCard";

import "./dailyForecast.css"

function DailyForecast({forecast, nextDate, checkCondition}) {

    return (
        <div className="daily-forecast-display">
            <h3 className="daily-forecast-header">
                8 Day Forecast
            </h3>
            <div className="daily-forecast-list">
                {forecast.map((day, index) => {
                    let date = nextDate(index + 1);
                    const condition = checkCondition(day.weather[0].main)
                    return (
                        <div key={index} className="card">
                            <ForecastCard isDaily={true} forecast={day} date={date} condition={condition}/>
                        </div>
                    )
                } )}
            </div>

        </div>
    )
}

export default DailyForecast;