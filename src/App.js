import './App.css';
import dayjs from "dayjs";
import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import ForecastDisplay from "./Forecast/ForecastDisplay";
import {useEffect, useState} from "react";

function App() {
    const [currDay, setCurrDay] = useState("");

    useEffect(()=> {
        const getData = () => {
            const day = dayjs().format("MMM D YYYY");
            setCurrDay(day);
        }

        getData();
    }, [])

  return (
    <div className="App">
        <Banner currDate={currDay}/>
        <Search />
        <ForecastDisplay />
    </div>
  );
}

export default App;
