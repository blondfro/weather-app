import './App.css';
import dayjs from "dayjs";
import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import ForecastDisplay from "./Forecast/ForecastDisplay";
import {useEffect, useState} from "react";

function App() {
    const [currDay, setCurrDay] = useState("");

    useEffect(()=> {
        getData();
    }, []);

    const getData = () => {
        const day = dayjs().format("MMM D YYYY");
        setCurrDay(day);
    };

    const getNextDay = (addValue) => {
        const nextDay = dayjs().add(addValue, "day").format("MMM D YYYY");
        return nextDay
    }

  return (
    <div className="App">
        <Banner currDate={currDay}/>
        <Search />
        <ForecastDisplay nextDate = {getNextDay}/>
    </div>
  );
}

export default App;
