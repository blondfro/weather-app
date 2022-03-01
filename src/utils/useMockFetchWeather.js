import React, { useState } from 'react';



function useMockFetchWeather() {
    const [currForecast, setCurrForecast] = useState(null);
    const [dailyForecast, setDailyForecast] = useState(null)
    const [location, setLocation] = useState({
        name: "",
        state: "",
        country: "",
        lat: 0,
        long: 0
    });

    const getLocation = async (searchLocation) => {
        const fetched = await fetch("mockLocationDB.json")
            .then(res => res.json())
            .then(data => data);

        setLocation({
            name: searchLocation,
            state: fetched.state,
            country: fetched.country,
            lat: fetched.lat,
            long: fetched.lon
        });

        getForecast();
    }

    const getForecast = async () => {
         const weather = await fetch("mockForecastDB.json")
            .then(res => res.json())
             .then(data => data);

        setCurrForecast(weather.current);
        setDailyForecast(weather.daily);
    }

    return {
        location,
        currForecast,
        dailyForecast,
        getLocation
    }
}

export default useMockFetchWeather;