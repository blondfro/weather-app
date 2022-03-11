import { useState } from 'react';


const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.openweathermap.org/";
const LATLONG_URL = "data/2.5/onecall?";
const GEOLOC_URL = "geo/1.0/direct?q=";
const units = "imperial"


function useFetchWeather() {
    const [currForecast, setCurrForecast] = useState(null);
    const [dailyForecast, setDailyForecast] = useState(null);
    const [location, setLocation] = useState({});


    const getGeoLocation = async (searchLocation) => {
        return  await fetch(`${BASE_URL}${GEOLOC_URL}${searchLocation}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data[0])
                    return {
                        name: data[0].name,
                        state: data[0].state,
                        country: data[0].country,
                        lat: data[0].lat,
                        long: data[0].lon
                    }
                }
            })
            .catch(e => console.log(e));

    }


    const getForecast = async (lat, long) => {
        return await fetch(`${BASE_URL}${LATLONG_URL}lat=${lat}&lon=${long}&units=${units}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    return data
                }
            })
            .catch(e => console.log(e))


    }

    const gatherWeather = async searchLoc => {
        const currDay = await getGeoLocation(searchLoc);
        const forecastData = await getForecast(currDay.lat, currDay.long);

        setLocation(currDay);
        setCurrForecast(forecastData.current);
        setDailyForecast(forecastData.daily);

    }


    return {
        location,
        currForecast,
        dailyForecast,
        gatherWeather
    }

}

export default useFetchWeather;