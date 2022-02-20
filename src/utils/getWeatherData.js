const dailyForecast = [];

const currDayForecast = data => [
    {
        name: "Temp",
        value: Math.round(data.current.temp),
        units: "°F"
    },
    {
        name: "Wind Speed",
        value: Math.round(data.current.wind_speed),
        units: "mph"
    },
    {
        name: "Humidity",
        value: Math.round(data.current.humidity),
        units: "%"
    },
    {
        name: "UV Index",
        value: Math.round(data.current.uvi),
        units: ""
    },
    {
        name: "forecast",
        value: data.current.weather[0].main,
        units: ""
    }
]

const weeklyForecast = data => {
    data.forEach(day => {
        dailyForecast.push(currDayForecast(day))
    })
}

export {currDayForecast, weeklyForecast, dailyForecast}

