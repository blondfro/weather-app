import {createContext, useEffect, useState} from "react";

import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import ForecastDisplay from "./Forecast/ForecastDisplay";

import './App.css';



import useMockFetchWeather from "./utils/useMockFetchWeather";


export const WeatherContext = createContext();

function App() {
    const [searchLoc, setSearchLoc] = useState("");


    const { location, currForecast, dailyForecast, getLocation } = useMockFetchWeather();


   const handleChange = (event) => {
       const { value } = event.target;
       setSearchLoc(value);
   }

   const handleSearch = () => {
       getLocation(searchLoc);
       setSearchLoc("")
   }


  return (
    <div className="App">
        <WeatherContext.Provider
            value={{
                location,
                currForecast,
                dailyForecast,
                handleChange,
                handleSearch
            }} >
            <Banner />
            <Search />
            {!currForecast ? null : <ForecastDisplay />}

        </WeatherContext.Provider>
    </div>
  );
}

export default App;
