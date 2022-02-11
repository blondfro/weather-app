import React from 'react';
import ForecastCard from "./ForecastCard";

function DailyForecast({forecast, nextDate}) {
    return (
        <div>
            {forecast.map((day, index) => {
                let date = nextDate(index + 1)
                return (
                    <div key={day} className="card">
                        <ForecastCard isDaily={true} forecast={day} date={date}/>
                    </div>
                )

            } )}
        </div>
    )
}

export default DailyForecast;