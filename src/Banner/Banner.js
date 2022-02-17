import React, {useContext} from 'react';
import "./Banner.css";
import {WeatherContext} from "../App";

function Banner() {
    const { currDay } = useContext(WeatherContext)
    return (
        <div className="app-title-section">
            <h1>Weather Dashboard</h1>
            <h2>{currDay}</h2>
        </div>
    )
}

export default Banner;