import React, {useEffect, useState} from 'react';
import { currDayForecast, weeklyForecast, dailyForecast } from "./getWeatherData";
import {logDOM} from "@testing-library/react";

const { REACT_APP_API_KEY } = process.env
const BASE_URL = "https://api.openweathermap.org/";
const LATLONG_URL = "data/2.5/onecall?";
const GEOLOC_URL = "geo/1.0/direct?q=";
const units = "imperial"


function useFetchWeather({ location }) {
    const [currForecast, setCurrForecast] = useState(null);
    const [dailyForecast, setDailyForecast] = useState(null)
    const [cityName, setCityName] = useState("");
    const [stateName, setStateName] = useState("");
    const [countryName, setCountryName] = useState("");
    const [lat, setlat] = useState(0);
    const [long, setLong] = useState(0);

    useEffect(() => {
        const getGeoLocation = () => {
            const data = fetch(`${BASE_URL}${GEOLOC_URL}${location}&appid=${REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    if (data[0].name) {
                        setlat(data[0].lat)
                        setLong(data[0].lon)
                        setCityName(data[0].name)
                        setStateName(data[0].state)
                        setCountryName(data[0].country)
                    }
                })
                .catch(e => console.log(e));

            return data
        }

        getGeoLocation();

    }, []);

    useEffect(() => {
        const getForecast = () => {
            const data = fetch(`${BASE_URL}${LATLONG_URL}lat=${lat}$lon=${long}$units=${units}&appid=${REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setCurrForecast(data);
                    setDailyForecast(data.daily)
                })
                .catch(e => console.log(e))

            return data
        }

        getForecast()

    }, [])

    return {
        currForecast,
        dailyForecast,
        cityName,
        stateName,
        countryName
    }


}

export default useFetchWeather;