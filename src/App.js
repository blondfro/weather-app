import {createContext, useState} from "react";

import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import ForecastDisplay from "./Forecast/ForecastDisplay";

import './App.css';

import useFetchWeather from "./utils/useFetchWeather";
import useSearchHistory from "./utils/useSearchHistory";



export const WeatherContext = createContext();

function App() {
    const [searchLoc, setSearchLoc] = useState("");

    const {location, currForecast, dailyForecast, gatherWeather } = useFetchWeather();

    const { saveSearchHistory } = useSearchHistory()


   const handleChange = (event) => {
       const { value } = event.target;
       setSearchLoc(value);
   }

   const handleSearch = () => {
       saveSearchHistory(searchLoc);
       gatherWeather(searchLoc);
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
