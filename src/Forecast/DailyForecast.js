import React from 'react';
import ForecastCard from "./ForecastCard";

function DailyForecast({forecast}) {
    return (
        <div>
            {forecast.map(day => {
                return  <div key={day} className="card">
                            <ForecastCard isDaily={true} forecast={day}/>
                        </div>

            } )}
        </div>
    )
}

export default DailyForecast;