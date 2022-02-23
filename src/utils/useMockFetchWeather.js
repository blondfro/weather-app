import React, {useEffect, useState} from 'react';

import { mockLocation, mockForecast } from "../mockData/mockDB";

function useMockFetchWeather() {
    const [currForecast, setCurrForecast] = useState(mockForecast.current);
    const [dailyForecast, setDailyForecast] = useState(mockForecast.daily)
    const [location, setLocation] = useState({
        name: "",
        state: "",
        country: "",
        lat: 0,
        long: 0
    });

    const getLocation = async () => {
        const fetched = await fetch("mockLocationDB.json")
            .then(res => res.json())
            .then(data => data);

        setLocation({
            name: fetched.name,
            state: fetched.state,
            country: fetched.country,
            lat: fetched.lat,
            long: fetched.lon
        });
    }

    const getForecast = async () => {
         const weather = await fetch("mockForecastDB.json")
            .then(res => res.json())
             .then(data => data);

        setCurrForecast(weather.current);
        setDailyForecast(weather.daily);
    }


    useEffect(()=> {
        getLocation();
        getForecast();
    }, [])



    return {
        location,
        currForecast,
        dailyForecast
    }
}

export default useMockFetchWeather;