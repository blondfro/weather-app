import {createContext, useEffect, useState} from "react";

import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import ForecastDisplay from "./Forecast/ForecastDisplay";

import './App.css';


import { mockLocation, mockForecast } from "./mockData/mockDB";
import useMockFetchWeather from "./utils/useMockFetchWeather";


export const WeatherContext = createContext();

function App() {
    const [searchLoc, setSearchLoc] = useState("");
    const [forecast, setForecast] = useState(mockForecast);

    const { location, currForecast, dailyForecast } = useMockFetchWeather();


   const handleChange = (event) => {
       const { value } = event.target;
       setSearchLoc(value);
   }


  return (
    <div className="App">
        <WeatherContext.Provider
            value={{
                location,
                currForecast,
                dailyForecast,
                handleChange,
            }} >
            <Banner />
            <Search />
            <ForecastDisplay />
        </WeatherContext.Provider>
    </div>
  );
}

export default App;
