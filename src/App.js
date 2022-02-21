import {createContext, useEffect, useState} from "react";

import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import ForecastDisplay from "./Forecast/ForecastDisplay";

import './App.css';
import dayjs from "dayjs";


import { mockLocation, mockForecast } from "./mockData/mockDB";

export const WeatherContext = createContext();

function App() {
    const [currDay, setCurrDay] = useState("");
    const [searchLoc, setSearchLoc] = useState("");
    const [location, setLocation] = useState(mockLocation);
    const [currForecast, setCurrForecast] = useState({});
    const [dailyForecast, setDailyForecast] = useState([]);
    const [forecast, setForecast] = useState(mockForecast);

    // day.js
    const getCurrDate = () => {
        const day = dayjs().format("MMM D YYYY");
        setCurrDay(day);
    };

    const getNextDay = (addValue) => {
        const nextDay = dayjs().add(addValue, "day").format("MMM D YYYY");
        return nextDay
    }

    // get forecast section
    const getLocation = async () => {
        const fetched = await fetch("mockLocationDB.json")
            .then(res => res.json());

        setLocation(fetched);
    }

    const getForecast = async () => {
        await fetch("mockForecastDB.json")
            .then(res => res.json())
            .then(data => {
                setForecast(data);
                setCurrForecast(data.current);
                setDailyForecast(data.daily);
            });
    }


    useEffect(()=> {
        getCurrDate();
        getLocation();
        getForecast();
    }, []);

   const handleChange = (event) => {
       const { value } = event.target;
       setSearchLoc(value);
   }


  return (
    <div className="App">
        <WeatherContext.Provider
            value={{
                currDay,
                location,
                forecast,
                currForecast,
                dailyForecast,
                handleChange,
                getNextDay,
            }} >
            <Banner />
            <Search />
            <ForecastDisplay />
        </WeatherContext.Provider>
    </div>
  );
}

export default App;
