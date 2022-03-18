import React, {useContext} from 'react';
import ForecastCard from "./ForecastCard";

import "./dailyForecast.css"
import {WeatherContext} from "../App";
import { getNextDay} from "../utils/getDate";

function DailyForecast({ checkCondition }) {
    const { dailyForecast } = useContext(WeatherContext);

    return (
        <div className="daily-forecast-display">
            <h3 className="daily-forecast-header">
                8 Day Forecast
            </h3>
            {
                !dailyForecast
                    ? null
                    : <div className="daily-forecast-list">
                        {dailyForecast.map((nextDay, index) => {
                            let day = getNextDay(index + 1);
                            const condition = checkCondition(nextDay.weather[0].main)
                            return (
                                <div key={index} className="card">
                                    <ForecastCard isDaily={true} forecast={nextDay} day={day} condition={condition}/>
                                </div>
                            )
                        } )}
                    </div>
            }


        </div>
    )
}

export default DailyForecast;