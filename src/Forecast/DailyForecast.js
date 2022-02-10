import React from 'react';
import ForecastCard from "./ForecastCard";

const dailyForecast = [
    {
        data: "test 1"
    },
    {
        data: "test 2"
    },
    {
        data: "test 3"
    },
    {
        data: "test 4"
    },
    {
        data: "test 5"
    },

];

function DailyForecast() {
    return (
        <div>
            {dailyForecast.map(day => {
                return  <div key={day} className="card">
                            <ForecastCard isDaily={true}/>
                        </div>

            } )}
        </div>
    )
}

export default DailyForecast;