import {createContext, useEffect, useState} from "react";

import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import ForecastDisplay from "./Forecast/ForecastDisplay";

import './App.css';
import dayjs from "dayjs";

export const WeatherContext = createContext();

function App() {
    const [currDay, setCurrDay] = useState("");
    const [searchLoc, setSearchLoc] = useState("")

    const getCurrDate = () => {
        const day = dayjs().format("MMM D YYYY");
        setCurrDay(day);
    };

    const getNextDay = (addValue) => {
        const nextDay = dayjs().add(addValue, "day").format("MMM D YYYY");
        return nextDay
    }


    useEffect(()=> {
        getCurrDate();
    }, []);

   const handleChange = (event) => {
       const { avalue } = event.target;
       setSearchLoc(avalue);
   }


  return (
    <div className="App">
        <WeatherContext.Provider
            value={{ currDay, handleChange }} >
            <Banner />
            <Search />
            <ForecastDisplay nextDate = {getNextDay}/>
        </WeatherContext.Provider>
    </div>
  );
}

export default App;
